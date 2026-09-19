// Build-time parser: turns synced journal, ADR decisions, and engineering case studies into a unified feed.
// Runs during `astro build`.

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import matter from 'gray-matter';

const CONTENT = path.resolve(process.cwd(), 'content');

export type FeedKind = 'journal' | 'decision' | 'engineering';

export interface FeedEntry {
  id: string;
  slug: string;
  date: string; // YYYY-MM-DD
  kind: FeedKind;
  title: string;
  status?: string;
  summaryHtml: string;
  bulletsHtml: string[];
  tags: string[];
  url?: string;
}

function formatDate(val: unknown): string {
  if (!val) return '';
  if (val instanceof Date) {
    return val.toISOString().split('T')[0];
  }
  const str = String(val).trim();
  const match = str.match(/^\d{4}-\d{2}-\d{2}/);
  if (match) return match[0];
  return str;
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

    if (data.status !== 'published') continue;

    // Split into per-day blocks on `## YYYY-MM-DD` headings.
    const parts = content.split(/^## (\d{4}-\d{2}-\d{2})\s*$/m);
    for (let i = 1; i < parts.length; i += 2) {
      const date = parts[i];
      const block = parts[i + 1] ?? '';

      const summaryMatch = block.match(/- \*\*Session Summary:\*\*\s*(.+)/);
      const summary = summaryMatch ? summaryMatch[1].trim() : '';

      if (!summary) continue;

      const bullets: string[] = [];
      const lines = block.split('\n');
      const start = lines.findIndex((l) => /- \*\*Key Decisions:\*\*/.test(l));
      if (start !== -1) {
        for (let j = start + 1; j < lines.length; j++) {
          const line = lines[j];
          if (/^- \*\*/.test(line)) break;
          const m = line.match(/^\s+(?:\d+\.|[-*])\s+(.*)$/);
          if (m && m[1].trim()) bullets.push(m[1].trim());
        }
      }

      entries.push({
        id: `journal-${date}`,
        slug: date,
        date: formatDate(date),
        kind: 'journal',
        title: `Session — ${date}`,
        summaryHtml: marked.parseInline(summary) as string,
        bulletsHtml: bullets.map((b) => marked.parseInline(b) as string),
        status: undefined,
        tags: data.tags || ['journal', 'session'],
        url: undefined,
      });
    }
  }
  return entries;
}

function parseDecisions(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'decisions'))) {
    const { data, content } = matter(body);

    const status = (data.status || '').toLowerCase();
    if (status !== 'published' && status !== 'accepted') continue;

    const slug = name.replace(/\.md$/, '');
    const contextMatch = content.match(/## Context\n([\s\S]*?)(?=\n## |$)/);
    const context = contextMatch ? contextMatch[1].trim() : '';

    entries.push({
      id: `decision-${slug}`,
      slug,
      date: formatDate(data.date),
      kind: 'decision',
      title: data.title || slug,
      status: 'published',
      summaryHtml: context ? (marked.parse(context) as string) : '',
      bulletsHtml: [],
      tags: data.tags || ['architecture', 'adr'],
      url: `/decisions/${slug}`,
    });
  }
  return entries;
}

function parseEngineering(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body } of readDir(path.join(CONTENT, 'engineering'))) {
    if (name === 'project-alpha.md') continue;
    const { data, content } = matter(body);

    const status = (data.status || '').toLowerCase();
    if (status !== 'published' && status !== 'accepted') continue;

    const slug = name.replace(/\.md$/, '');
    let summary = data.summary;
    if (!summary) {
      const problemMatch = content.match(/## The Problem\n([\s\S]*?)(?=\n## |$)/);
      if (problemMatch) {
        summary = problemMatch[1].trim().split('\n')[0];
      } else {
        const contextMatch = content.match(/## Context\n([\s\S]*?)(?=\n## |$)/);
        if (contextMatch) {
          summary = contextMatch[1].trim().split('\n')[0];
        }
      }
    }

    entries.push({
      id: `engineering-${slug}`,
      slug,
      date: formatDate(data.date),
      kind: 'engineering',
      title: data.title || slug,
      status: 'published',
      summaryHtml: summary ? (marked.parse(summary) as string) : '',
      bulletsHtml: [],
      tags: data.tags || ['golang', 'distributed-systems'],
      url: `/showcase/${slug}`,
    });
  }
  return entries;
}

export function getFeed(): FeedEntry[] {
  return [...parseEngineering(), ...parseDecisions(), ...parseJournal()].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.kind === b.kind ? 0 : a.kind === 'engineering' ? -1 : a.kind === 'decision' ? -1 : 1;
  });
}
