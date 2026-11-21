import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import astroConfig from '../astro.config.mjs';
import {
  CSP_DIRECTIVES,
  extractK8sScriptHash,
  parseCsp,
  sha256CspHash,
  verifyAstroSourceScripts,
  verifyHtmlCsp,
} from './verify-csp.mjs';

function withTempAstroDir(files, fn) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-csp-astro-'));
  try {
    for (const [name, content] of Object.entries(files)) {
      const filePath = path.join(tmp, name);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content, 'utf8');
    }
    return fn(tmp);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

test('verifyAstroSourceScripts: src/**/*.astro uses only Astro-hoisted module scripts or application/ld+json and zero inline on*= handlers', () => {
  const result = verifyAstroSourceScripts('src');
  assert.ok(result.filesChecked > 0);
});

test('verifyAstroSourceScripts: allows hoisted <script> modules and application/ld+json while rejecting is:inline, unhoisted scripts, and on*= handlers', () => {
  withTempAstroDir(
    {
      'Valid.astro': [
        '---',
        'const payload = { "@context": "https://schema.org" };',
        '---',
        '<div data-ok="true">Hello</div>',
        '<script type="application/ld+json" set:html={JSON.stringify(payload)} />',
        '<script>',
        '  const count: number = 1;',
        '  console.log(count);',
        '</script>',
      ].join('\n'),
    },
    (dir) => {
      const res = verifyAstroSourceScripts(dir);
      assert.equal(res.filesChecked, 1);
    },
  );

  withTempAstroDir(
    {
      'InlineScript.astro': '<script is:inline>console.log(1);</script>',
    },
    (dir) => {
      assert.throws(() => verifyAstroSourceScripts(dir), /is:inline/i);
    },
  );

  withTempAstroDir(
    {
      'DefineVarsScript.astro': '<script define:vars={{ a: 1 }}>console.log(a);</script>',
    },
    (dir) => {
      assert.throws(() => verifyAstroSourceScripts(dir), /unhoisted executable/i);
    },
  );

  withTempAstroDir(
    {
      'ClassicTypeScript.astro': '<script type="text/javascript">console.log(1);</script>',
    },
    (dir) => {
      assert.throws(() => verifyAstroSourceScripts(dir), /unhoisted executable/i);
    },
  );

  withTempAstroDir(
    {
      'StaticHandler.astro': '<button onclick="alert(1)">Click</button>',
    },
    (dir) => {
      assert.throws(() => verifyAstroSourceScripts(dir), /onclick/i);
    },
  );

  withTempAstroDir(
    {
      'DynamicHandler.astro': '---\nconst fn = () => {};\n---\n<div onmouseover={fn}>Hover</div>',
    },
    (dir) => {
      assert.throws(() => verifyAstroSourceScripts(dir), /onmouseover/i);
    },
  );
});

function buildCspHtml({
  cspContent,
  headExtra = '',
  bodyHtml = '<main>Hello</main>',
}) {
  const metaTag =
    cspContent === undefined
      ? ''
      : `<meta http-equiv="content-security-policy" content="${cspContent}">`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  ${metaTag}
  ${headExtra}
</head>
<body>
  ${bodyHtml}
</body>
</html>`;
}

test('CSP_DIRECTIVES, sha256CspHash, and parseCsp compute exact hashes and parse directives', () => {
  assert.deepEqual(CSP_DIRECTIVES, [
    "default-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ]);

  // Empty string SHA-256 base64 digest is deterministic
  assert.equal(
    sha256CspHash(''),
    'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
  );
  assert.throws(() => sha256CspHash(123), TypeError);

  const parsed = parseCsp(
    "default-src 'self'; img-src 'self' data:; script-src 'self' 'sha256-abc='; style-src 'self' 'unsafe-inline';",
  );
  assert.deepEqual(parsed, {
    'default-src': ["'self'"],
    'img-src': ["'self'", 'data:'],
    'script-src': ["'self'", "'sha256-abc='"],
    'style-src': ["'self'", "'unsafe-inline'"],
  });

  assert.throws(() => parseCsp("default-src 'self'; default-src 'none'"), /Duplicate CSP directive/);
  assert.throws(() => parseCsp('default-src;'), /has no values/);
});

test('verifyHtmlCsp accepts compliant HTML, JSON-LD, same-origin external scripts, and redirect stubs', () => {
  const scriptBody = 'console.log("csp-ok"); if (1 < 2) { const obj = { onUpdate: true }; }';
  const scriptHash = sha256CspHash(scriptBody);
  const cspContent = [
    ...CSP_DIRECTIVES,
    "font-src 'self'",
    `script-src 'self' '${scriptHash}'`,
    "style-src 'self' 'unsafe-inline'",
  ].join('; ');

  const html = buildCspHtml({
    cspContent,
    headExtra: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite"}</script>`,
    bodyHtml: `<script type="module" src="/_astro/app.js"></script><script type="module">${scriptBody}</script>`,
  });

  const result = verifyHtmlCsp(html, 'dist/index.html');
  assert.equal(result.isRedirect, false);
  assert.deepEqual(result.scriptHashes, [scriptHash]);
  assert.deepEqual(result.inlineScriptHashes, [scriptHash]);

  const redirectHtml = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/showcase/"></head><body></body></html>`;
  const redirectResult = verifyHtmlCsp(redirectHtml, 'dist/showcase/redirect/index.html');
  assert.equal(redirectResult.isRedirect, true);
});

test('verifyHtmlCsp rejects missing meta, invalid directives, unsafe script-src, on*= handlers, bad JSON-LD, cross-origin scripts, and unhashed inline scripts', () => {
  const scriptBody = 'console.log(1);';
  const validHash = sha256CspHash(scriptBody);
  const basePolicy = [
    ...CSP_DIRECTIVES,
    "font-src 'self'",
    `script-src 'self' '${validHash}'`,
    "style-src 'self' 'unsafe-inline'",
  ].join('; ');

  assert.throws(
    () => verifyHtmlCsp(buildCspHtml({ bodyHtml: '<main>No meta</main>' }), 'no-meta.html'),
    /missing <meta http-equiv="content-security-policy">/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace("frame-ancestors 'none'; ", ''),
        }),
        'missing-directive.html',
      ),
    /missing CSP directive "frame-ancestors"/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace("style-src 'self' 'unsafe-inline'", "style-src 'self'"),
        }),
        'bad-style.html',
      ),
    /invalid CSP directive "style-src"/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace("font-src 'self'", "font-src *"),
        }),
        'bad-font.html',
      ),
    /invalid CSP directive "font-src"/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace(`'${validHash}'`, "'unsafe-inline'"),
        }),
        'unsafe-inline.html',
      ),
    /'unsafe-inline'/,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace(`'${validHash}'`, "'unsafe-eval'"),
        }),
        'unsafe-eval.html',
      ),
    /'unsafe-eval'/,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy,
          bodyHtml: '<button onclick="alert(1)">Hi</button>',
        }),
        'html-onclick.html',
      ),
    /onclick=/i,
  );

  const tplScript = 'el.innerHTML = `<div class="x" onclick="foo()">tap</div>`;';
  const tplHash = sha256CspHash(tplScript);
  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy.replace(validHash, tplHash),
          bodyHtml: `<script>${tplScript}</script>`,
        }),
        'template-onclick.html',
      ),
    /onclick=/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy,
          headExtra: '<script type="application/ld+json">{not-json</script>',
        }),
        'bad-jsonld.html',
      ),
    /invalid JSON/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy,
          bodyHtml: '<script src="https://evil.example/a.js"></script>',
        }),
        'cross-origin.html',
      ),
    /same-origin/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy,
          bodyHtml: '<script src="//cdn.example/a.js"></script>',
        }),
        'protocol-relative.html',
      ),
    /same-origin/i,
  );

  assert.throws(
    () =>
      verifyHtmlCsp(
        buildCspHtml({
          cspContent: basePolicy,
          bodyHtml: '<script>alert(1);</script>',
        }),
        'unhashed.html',
      ),
    /missing from script-src/i,
  );
});

test('public/k8s/index.html is CSP-compliant, uses delegated click attributes, and matches extractK8sScriptHash', () => {
  const k8sPath = path.resolve('public/k8s/index.html');
  const html = fs.readFileSync(k8sPath, 'utf8');
  const expectedHash = extractK8sScriptHash(k8sPath);
  const result = verifyHtmlCsp(html, 'public/k8s/index.html');

  assert.ok(result.scriptHashes.includes(expectedHash));
  assert.match(html, /data-diagram-idx=/);
  assert.match(html, /data-diagram-desc=/);
  assert.match(html, /data-quiz-slide=/);
  assert.match(html, /data-quiz-opt=/);
  assert.match(html, /data-slide-idx=/);
});

test('astro.config.mjs configures security.csp with CSP_DIRECTIVES, scriptDirective hashes, and styleDirective', () => {
  assert.ok(astroConfig.security && typeof astroConfig.security.csp === 'object');
  assert.deepEqual(astroConfig.security.csp, {
    directives: CSP_DIRECTIVES,
    scriptDirective: {
      resources: ["'self'"],
      hashes: [extractK8sScriptHash()],
    },
    styleDirective: {
      resources: ["'self'", "'unsafe-inline'"],
    },
  });
});
