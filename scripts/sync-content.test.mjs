import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPublic } from './sync-content.mjs';

const PUBLISHED = ['published'];
const ADR = ['accepted', 'superseded'];

test('isPublic: only frontmatter status on the allowlist passes', () => {
  const cases = [
    ['unquoted published', '---\ntitle: A\nstatus: published\n---\nbody', PUBLISHED, true],
    ['double-quoted', '---\nstatus: "published"\n---\n', PUBLISHED, true],
    ['single-quoted, mixed case', "---\nstatus: 'Accepted'\n---\n", ADR, true],
    ['superseded ADR', '---\nstatus: superseded\n---\n', ADR, true],
    ['CRLF line endings', '---\r\ntitle: A\r\nstatus: published\r\n---\r\nbody', PUBLISHED, true],
    ['BOM before frontmatter', '﻿---\nstatus: published\n---\n', PUBLISHED, true],
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
