import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import astroConfig from '../astro.config.mjs';
import {
  CSP_DIRECTIVES,
  extractK8sScriptHash,
  formatCaddyCspHeader,
  parseCsp,
  sha256CspHash,
  verifyAstroSourceScripts,
  verifyDistCsp,
  verifyHtmlCsp,
} from './verify-csp.mjs';

function withTempFiles(files, fn, prefix = 'verify-csp-') {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
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

const withTempAstroDir = (files, fn) => withTempFiles(files, fn, 'verify-csp-astro-');

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

function buildPolicyForHashes(hashes) {
  const quoted = hashes.map((h) => `'${h}'`);
  return [
    ...CSP_DIRECTIVES,
    "font-src 'self'",
    ['script-src', "'self'", ...quoted].join(' '),
    "style-src 'self' 'unsafe-inline'",
  ].join('; ');
}

test('formatCaddyCspHeader formats single-line Caddy directive, deduplicates hashes, and rejects invalid tokens', () => {
  const hashA = sha256CspHash('console.log("a");');
  const hashB = sha256CspHash('console.log("b");');

  const header = formatCaddyCspHeader([hashA, `'${hashB}'`, hashA]);
  assert.equal(
    header,
    `header Content-Security-Policy "default-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; font-src 'self'; script-src 'self' '${hashA}' '${hashB}'; style-src 'self' 'unsafe-inline'"`,
  );

  const emptyHeader = formatCaddyCspHeader([]);
  assert.equal(
    emptyHeader,
    `header Content-Security-Policy "default-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; font-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"`,
  );

  assert.throws(() => formatCaddyCspHeader(['not-a-sha256']), /invalid/i);
  assert.throws(() => formatCaddyCspHeader(["'unsafe-inline'"]), /invalid/i);
});

test('verifyDistCsp validates dist/**/*.html, requires index.html and k8s/index.html, and returns union caddyHeader', () => {
  const k8sBody = 'console.log("k8s");';
  const postBody = 'console.log("article");';
  const k8sHash = sha256CspHash(k8sBody);
  const postHash = sha256CspHash(postBody);
  const basePolicy = buildPolicyForHashes([k8sHash]);
  const postPolicy = buildPolicyForHashes([k8sHash, postHash]);

  withTempFiles(
    {
      'index.html': buildCspHtml({ cspContent: basePolicy, bodyHtml: '<main>Home</main>' }),
      'k8s/index.html': buildCspHtml({
        cspContent: basePolicy,
        bodyHtml: `<script>${k8sBody}</script>`,
      }),
      'blog/post/index.html': buildCspHtml({
        cspContent: postPolicy,
        bodyHtml: `<script type="module">${postBody}</script>`,
      }),
      'showcase/old/index.html':
        '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/showcase/"></head><body></body></html>',
    },
    (distDir) => {
      const res = verifyDistCsp(distDir);
      assert.equal(res.filesChecked, 4);
      assert.equal(res.redirectFiles, 1);
      assert.deepEqual(res.scriptHashes, [k8sHash, postHash]);
      assert.equal(res.caddyHeader, formatCaddyCspHeader([k8sHash, postHash]));
    },
    'verify-csp-dist-',
  );

  assert.throws(() => verifyDistCsp(path.join(os.tmpdir(), 'does-not-exist-csp-dist')), /not found/i);

  withTempFiles(
    {
      'k8s/index.html': buildCspHtml({
        cspContent: basePolicy,
        bodyHtml: `<script>${k8sBody}</script>`,
      }),
    },
    (distDir) => {
      assert.throws(() => verifyDistCsp(distDir), /index\.html/i);
    },
    'verify-csp-dist-',
  );

  withTempFiles(
    {
      'index.html': buildCspHtml({ cspContent: basePolicy, bodyHtml: '<main>Home</main>' }),
    },
    (distDir) => {
      assert.throws(() => verifyDistCsp(distDir), /k8s\/index\.html/i);
    },
    'verify-csp-dist-',
  );

  withTempFiles(
    {
      'index.html': buildCspHtml({
        cspContent: basePolicy,
        bodyHtml: '<main><script>alert(1)</script></main>',
      }),
      'k8s/index.html': buildCspHtml({
        cspContent: basePolicy,
        bodyHtml: `<script>${k8sBody}</script>`,
      }),
    },
    (distDir) => {
      assert.throws(() => verifyDistCsp(distDir), /missing from script-src/i);
    },
    'verify-csp-dist-',
  );
});

test('CLI node scripts/verify-csp.mjs <dir> exits 0 on valid dist and 1 on CSP violations or missing k8s/index.html', () => {
  const k8sBody = 'console.log("k8s-cli");';
  const k8sHash = sha256CspHash(k8sBody);
  const policy = buildPolicyForHashes([k8sHash]);

  withTempFiles(
    {
      'index.html': buildCspHtml({ cspContent: policy, bodyHtml: '<main>Home</main>' }),
      'k8s/index.html': buildCspHtml({
        cspContent: policy,
        bodyHtml: `<script>${k8sBody}</script>`,
      }),
    },
    (distDir) => {
      const stdout = execFileSync(process.execPath, ['scripts/verify-csp.mjs', distDir], {
        encoding: 'utf8',
      });
      assert.match(stdout, /header Content-Security-Policy "/);
      assert.match(stdout, new RegExp(k8sHash.replace(/[+/=]/g, '\\$&')));
    },
    'verify-csp-cli-',
  );

  withTempFiles(
    {
      'index.html': buildCspHtml({
        cspContent: policy,
        bodyHtml: '<main><script>alert(1)</script></main>',
      }),
      'k8s/index.html': buildCspHtml({
        cspContent: policy,
        bodyHtml: `<script>${k8sBody}</script>`,
      }),
    },
    (distDir) => {
      assert.throws(
        () => execFileSync(process.execPath, ['scripts/verify-csp.mjs', distDir], { encoding: 'utf8', stdio: 'pipe' }),
        (err) => err && err.status === 1,
      );
    },
    'verify-csp-cli-',
  );

  withTempFiles(
    {
      'index.html': buildCspHtml({ cspContent: policy, bodyHtml: '<main>Home</main>' }),
    },
    (distDir) => {
      assert.throws(
        () => execFileSync(process.execPath, ['scripts/verify-csp.mjs', distDir], { encoding: 'utf8', stdio: 'pipe' }),
        (err) => err && err.status === 1,
      );
    },
    'verify-csp-cli-',
  );
});

test('package.json scripts.build runs sync, astro build, and CSP verification gate', () => {
  const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
  assert.ok(pkg.scripts && typeof pkg.scripts.build === 'string');
  assert.ok(pkg.scripts.build.endsWith('&& node scripts/verify-csp.mjs'));
  assert.equal(pkg.scripts.build, 'npm run sync && astro build && node scripts/verify-csp.mjs');
});
