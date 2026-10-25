import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyDir, isPublic, NUMBERED_ADR } from './sync-content.mjs';

const PUBLISHED = ['published'];
const ADR = ['accepted', 'superseded'];

test('isPublic: only frontmatter status on the allowlist passes', () => {
  const cases = [
    ['unquoted published', '---\ntitle: A\nstatus: published\n---\nbody', PUBLISHED, true],
    ['double-quoted', '---\nstatus: "published"\n---\n', PUBLISHED, true],
    ['single-quoted', "---\nstatus: 'accepted'\n---\n", ADR, true],
    // Case-sensitive like the content schema: syncing "Accepted" would fail the build after content/ changed.
    ['mixed case stays private', '---\nstatus: Accepted\n---\n', ADR, false],
    ['superseded ADR', '---\nstatus: superseded\n---\n', ADR, true],
    ['CRLF line endings', '---\r\ntitle: A\r\nstatus: published\r\n---\r\nbody', PUBLISHED, true],
    ['BOM before frontmatter', '﻿---\nstatus: published\n---\n', PUBLISHED, true],
    ['trailing YAML comment', '---\nstatus: accepted # was proposed\n---\n', ADR, true],
    ['internal', '---\nstatus: internal\n---\n', PUBLISHED, false],
    ['proposed ADR', '---\nstatus: proposed\n---\n', ADR, false],
    ['published is not an ADR status', '---\nstatus: published\n---\n', ADR, false],
    ['no frontmatter', '# Title\n\nbody', PUBLISHED, false],
    ['status only in body bullet', '# ADR\n- **Status:** Accepted\n', ADR, false],
    ['status only in body section', '# ADR\n\n## Status\nAccepted\n', ADR, false],
    ['status line below frontmatter', '---\ntitle: A\n---\nstatus: published\n', PUBLISHED, false],
    ['frontmatter not at file start', 'intro\n---\nstatus: published\n---\n', PUBLISHED, false],
    ['prefix match is not enough', '---\nstatus: published-draft\n---\n', PUBLISHED, false],
  ];
  for (const [name, text, allowed, want] of cases) {
    assert.equal(isPublic(text, allowed), want, name);
  }
});

test('copyDir: copies public files and prunes everything else from the destination', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-content-'));
  try {
    const src = path.join(tmp, 'src');
    const dest = path.join(tmp, 'dest');
    fs.mkdirSync(src);
    fs.mkdirSync(dest);
    fs.writeFileSync(path.join(src, 'public.md'), '---\nstatus: published\n---\nhi');
    fs.writeFileSync(path.join(src, 'private.md'), '---\nstatus: internal\n---\nsecret');
    fs.writeFileSync(path.join(src, 'notes.txt'), 'not markdown');
    fs.writeFileSync(path.join(dest, 'private.md'), 'synced before it went private');
    fs.writeFileSync(path.join(dest, 'removed.md'), 'deleted from source');
    fs.writeFileSync(path.join(dest, 'keep.txt'), 'non-markdown is left alone');

    assert.equal(copyDir(src, dest, ['published']), 1);
    assert.deepEqual(fs.readdirSync(dest).sort(), ['keep.txt', 'public.md']);
    assert.equal(copyDir(path.join(tmp, 'missing'), dest, ['published']), 0);
    assert.deepEqual(fs.readdirSync(dest).sort(), ['keep.txt', 'public.md'], 'missing source leaves dest untouched');
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('copyDir: decisions publish only numbered ADRs, whatever a generated file claims as status', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-content-'));
  try {
    const src = path.join(tmp, 'src');
    const dest = path.join(tmp, 'dest');
    fs.mkdirSync(src);
    fs.writeFileSync(path.join(src, '016-real-decision.md'), '---\nstatus: accepted\n---\nADR');
    // Pipeline tickets (sdlc-*, goai-*) can carry status: accepted but are internal working notes.
    fs.writeFileSync(path.join(src, 'sdlc-1025-dfc7-adr.md'), '---\nstatus: accepted\n---\n/home/user/code-storage/project');
    fs.writeFileSync(path.join(src, 'goai-spec.md'), '---\nstatus: accepted\n---\nspec');
    fs.writeFileSync(path.join(src, '000-template.md'), '---\nstatus: proposed\n---\ntemplate');

    assert.equal(copyDir(src, dest, ADR, NUMBERED_ADR), 1);
    assert.deepEqual(fs.readdirSync(dest), ['016-real-decision.md']);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('main: a missing or incomplete source fails instead of building whatever content/ holds', () => {
  const script = fileURLToPath(new URL('./sync-content.mjs', import.meta.url));
  const sync = (dir) =>
    spawnSync(process.execPath, [script], { env: { ...process.env, SECOND_BRAIN_DIR: dir }, encoding: 'utf8' });

  const missing = sync(path.join(os.tmpdir(), 'no-such-second-brain'));
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /second-brain source incomplete: .*decisions/);

  // A partial clone: two of the three source folders. It must fail before touching content/.
  const partial = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-partial-'));
  try {
    fs.mkdirSync(path.join(partial, 'decisions'));
    fs.mkdirSync(path.join(partial, 'knowledge', 'engineering'), { recursive: true });
    const run = sync(partial);
    assert.equal(run.status, 1);
    assert.match(run.stderr, /second-brain source incomplete: .*knowledge\/blog/);
    assert.doesNotMatch(run.stderr, /decisions/);
  } finally {
    fs.rmSync(partial, { recursive: true, force: true });
  }
});
