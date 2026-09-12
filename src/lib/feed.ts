// Build-time parser: turns the synced journal + ADR markdown into a single,
// chronologically-sorted feed. No runtime cost — this runs during `astro build`.

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import matter from 'gray-matter';

const CONTENT = path.resolve(process.cwd(), 'content');

export type FeedKind = 'journal' | 'decision';

export interface FeedEntry {
  id: string;
  date: string; // YYYY-MM-DD
  kind: FeedKind;
  title: string;
  status?: string; // decisions only
  summaryHtml: string;
  bulletsHtml: string[];
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

function parseJournal(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'journal'))) {
    const { data, content } = matter(body);
    
    // Filter by the new schema: status must be 'published'
    if (data.status !== 'published') continue;

    // Split into per-day blocks on `## YYYY-MM-DD` headings.
    const parts = content.split(/^## (\\d{4}-\\d{2}-\\d{2})\\s*$/m);
    for (let i = 1; i < parts.length; i += 2) {
      const date = parts[i];
      const block = parts[i + 1] ?? '';
      
      // Extract session summary using a simple regex since we are inside a block
      const summaryMatch = block.match(/- \\*\\*Session Summary:\\*\\*\\s*(.+)/);
      const summary = summaryMatch ? summaryMatch[1].trim() : '';
      
      if (!summary) continue;

      // Extract key decisions bullets
      const bullets: string[] = [];
      const lines = block.split('\\n');
      const start = lines.findIndex((l) => /- \\*\\*Key Decisions:\\*\\*/.test(l));
      if (start !== -1) {
        for (let j = start + 1; j < lines.length; j++) {
          const line = lines[j];
          if (/^- \\*\\*/.test(line)) break;
          const m = line.match(/^\\s+(?:\\d+\\.|[-*])\\s+(.*)$/);
          if (m && m[1].trim()) bullets.push(m[1].trim());
        }
      }

      entries.push({
        id: `journal-${date}`,
        date,
        kind: 'journal',
        title: `Session — ${date}`,
        summaryHtml: marked.parseInline(summary) as string,
        bulletsHtml: bullets.map((b) => marked.parseInline(b) as string),
        status: undefined,
      });
    }
  }
  return entries;
}

function parseDecisions(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'decisions'))) {
    const { data, content } = matter(body);
    
    if (data.status !== 'published') continue;

    // Extract the "Context" section for the summary
    const contextMatch = content.match(/## Context\n([\s\S]*?)(?=\n## |$)/);
    const context = contextMatch ? contextMatch[1].trim() : '';

    entries.push({
      id: `decision-${name.replace('.md', '')}`,
      date: data.date,
      kind: 'decision',
      title: data.title,
      status: data.status,
      summaryHtml: marked.parse(context) as string,
      bulletsHtml: [],
    });
  }
  return entries;
}

export function getFeed(): FeedEntry[] {
  return [...parseJournal(), ...parseDecisions()].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.kind === b.kind ? 0 : a.kind === 'decision' ? -1 : 1;
  });
}
