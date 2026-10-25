import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateReadingTime, sectionParagraph, stripMarkdownInline } from './text.ts';

test('estimateReadingTime: 200 wpm, code blocks ignored, minimum 1', () => {
  const cases: [string, string, number][] = [
    ['empty', '', 1],
    ['short', 'one two three', 1],
    ['400 words', Array(400).fill('word').join(' '), 2],
    ['code block not counted', '```\n' + Array(1000).fill('x').join(' ') + '\n```\nhello', 1],
    ['markdown punctuation is not a word', '# ## * - > ` ~ _', 1],
  ];
  for (const [name, input, want] of cases) assert.equal(estimateReadingTime(input), want, name);
});

test('stripMarkdownInline: keeps link text, drops emphasis and code marks', () => {
  const cases: [string, string][] = [
    ['[thio.dev](https://thio.dev) site', 'thio.dev site'],
    ['**bold** _em_ `code` ~~gone~~', 'bold em code gone'],
    ['  padded  ', 'padded'],
  ];
  for (const [input, want] of cases) assert.equal(stripMarkdownInline(input), want, input);
});

test('sectionParagraph: first paragraph of the first matching ## section', () => {
  const body = '# T\n\n## Status\nAccepted\n\n## Context\nFirst para\nline two.\n\nSecond para.\n\n## Decision\nX';
  assert.equal(sectionParagraph(body, ['Context']), 'First para\nline two.');
  assert.equal(sectionParagraph(body, ['The Problem', 'Context']), 'First para\nline two.');
  assert.equal(sectionParagraph('## Overview\n\nOnly section, runs to end.', ['Overview']), 'Only section, runs to end.');
  assert.equal(sectionParagraph('## context\nlower-case heading', ['Context']), 'lower-case heading');
  assert.equal(sectionParagraph(body, ['Missing']), undefined);
});
