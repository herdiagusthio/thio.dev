// Build-time parser: turns the synced journal + ADR markdown into a single,
// chronologically-sorted feed. No runtime cost — this runs during `astro build`.

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

// Resolved from the project root — reliable during `astro build`/`dev`,
// unlike import.meta.url which shifts once this module is bundled.
const CONTENT = path.resolve(process.cwd(), 'content');

export type FeedKind = 'journal' | 'decision';

export interface FeedEntry {
  id: string;
  date: string; // YYYY-MM-DD
  kind: FeedKind;
  title: string;
  location?: string;
  status?: string; // decisions only
  summaryHtml: string;
  bulletsHtml: string[]; // key decisions (journal only)
  nextFocus?: string;
}

function readDir(dir: string): { name: string; body: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((name) => ({
      name,
      body: fs.readFileSync(path.join(dir, name), 'utf8'),
    }));
}

/** Grab the value after a `- **Label:**` field, single line. */
function field(block: string, label: string): string | undefined {
  const re = new RegExp(`- \\*\\*${label}:\\*\\*\\s*(.+)`);
  const m = block.match(re);
  return m ? m[1].trim() : undefined;
}

/** Extract the indented list items that follow a `- **Key Decisions:**` field. */
function decisionBullets(block: string): string[] {
  const lines = block.split('\n');
  const start = lines.findIndex((l) => /- \*\*Key Decisions:\*\*/.test(l));
  if (start === -1) return [];
  const items: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    // stop at the next top-level field or blank-then-field
    if (/^- \*\*/.test(line)) break;
    const m = line.match(/^\s+(?:\d+\.|[-*])\s+(.*)$/);
    if (m && m[1].trim()) items.push(m[1].trim());
  }
  return items;
}

function parseJournal(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'journal'))) {
    // Split into per-day blocks on `## YYYY-MM-DD` headings.
    const parts = body.split(/^## (\d{4}-\d{2}-\d{2})\s*$/m);
    // parts = [preamble, date1, block1, date2, block2, ...]
    for (let i = 1; i < parts.length; i += 2) {
      const date = parts[i];
      const block = parts[i + 1] ?? '';
      const summary = field(block, 'Session Summary') ?? '';
      if (!summary) continue;
      entries.push({
        id: `journal-${date}`,
        date,
        kind: 'journal',
        title: `Session — ${date}`,
        location: field(block, 'Location'),
        summaryHtml: marked.parseInline(summary) as string,
        bulletsHtml: decisionBullets(block).map(
          (b) => marked.parseInline(b) as string,
        ),
        nextFocus: field(block, 'Next Session Focus'),
        status: undefined,
      });
    }
  }
  return entries;
}

/** Pull the prose under a `## Heading` up to the next `## `. */
function section(body: string, heading: string): string {
  const re = new RegExp(`## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`);
  const m = body.match(re);
  return m ? m[1].trim() : '';
}

function parseDecisions(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'decisions'))) {
    const titleLine = body.match(/^#\s+(.*)$/m)?.[1] ?? name.replace(/\.md$/, '');
    const title = titleLine.replace(/^ADR:\s*/i, '').trim();
    const date = field(body, 'Date') ?? '';
    const status = field(body, 'Status') ?? 'Unknown';
    const context = section(body, 'Context');
    if (!date) continue;
    entries.push({
      id: `decision-${name.replace(/\.md$/, '')}`,
      date,
      kind: 'decision',
      title,
      status,
      summaryHtml: marked.parse(context) as string,
      bulletsHtml: [],
    });
  }
  return entries;
}

export function getFeed(): FeedEntry[] {
  return [...parseJournal(), ...parseDecisions()].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1; // newest first
    return a.kind === b.kind ? 0 : a.kind === 'decision' ? -1 : 1;
  });
}
