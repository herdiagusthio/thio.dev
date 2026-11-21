import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { verifyAstroSourceScripts } from './verify-csp.mjs';

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
