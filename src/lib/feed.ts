// Build-time parser: turns synced blog posts, engineering case studies, ADR decisions, and journal entries
// into a unified, typed content layer with reading-time metrics and resilient Markdown/YAML metadata parsing.

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import matter from 'gray-matter';

const CONTENT = path.resolve(process.cwd(), 'content');

export type FeedKind = 'journal' | 'decision' | 'engineering' | 'blog';

export interface FeedEntry {
  id: string;
  slug: string;
  date: string; // YYYY-MM-DD
  kind: FeedKind;
  title: string;
  status?: string;
  summaryText: string;
  summaryHtml: string;
  bodyHtml: string;
  bulletsHtml: string[];
  tags: string[];
  readingTimeMinutes: number;
  url?: string;
}

export function formatDate(val: unknown, fallback = ''): string {
  if (!val) return fallback;
  if (val instanceof Date) {
    return val.toISOString().split('T')[0];
  }
  const str = String(val).trim();
  const match = str.match(/(\d{4}-\d{2}-\d{2})/);
  if (match) return match[1];
  return str || fallback;
}

export function estimateReadingTime(text: string): number {
  const clean = text.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`~-]/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function stripMarkdownInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim();
}

function readDir(dir: string): { name: string; body: string; mtimeIso: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((name) => {
      const fullPath = path.join(dir, name);
      const stat = fs.statSync(fullPath);
      return {
        name,
        body: fs.readFileSync(fullPath, 'utf8'),
        mtimeIso: stat.mtime.toISOString().split('T')[0],
      };
    });
}

function extractTitle(data: Record<string, any>, content: string, fallbackSlug: string): string {
  if (data.title) return String(data.title).trim();
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) return stripMarkdownInline(h1Match[1]);
  return fallbackSlug;
}

function extractStatus(data: Record<string, any>, content: string): string {
  if (data.status) return String(data.status).toLowerCase().trim();
  const bulletMatch = content.match(/^-\s*\*\*Status:?\*\*\s*([^\n\r]+)/im);
  if (bulletMatch) return bulletMatch[1].toLowerCase().trim();
  const sectionMatch = content.match(/##\s*Status\s*\n+([^\n\r#]+)/i);
  if (sectionMatch) return sectionMatch[1].toLowerCase().trim();
  return '';
}

function extractDate(data: Record<string, any>, content: string, fallbackDate: string): string {
  if (data.date) return formatDate(data.date, fallbackDate);
  const bulletMatch = content.match(/^-\s*\*\*Date:?\*\*\s*(\d{4}-\d{2}-\d{2})/im);
  if (bulletMatch) return bulletMatch[1];
  const inlineDateMatch = content.match(/\b(202[4-9]-\d{2}-\d{2})\b/);
  if (inlineDateMatch) return inlineDateMatch[1];
  return fallbackDate;
}

export function parseJournal(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { body } of readDir(path.join(CONTENT, 'journal'))) {
    const { data, content } = matter(body);

    if (data.status !== 'published') continue;

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
        summaryText: stripMarkdownInline(summary),
        summaryHtml: marked.parseInline(summary) as string,
        bodyHtml: marked.parse(block) as string,
        bulletsHtml: bullets.map((b) => marked.parseInline(b) as string),
        status: 'published',
        tags: data.tags || ['journal', 'session'],
        readingTimeMinutes: estimateReadingTime(block),
        url: undefined,
      });
    }
  }
  return entries;
}

export function getDecisions(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body, mtimeIso } of readDir(path.join(CONTENT, 'decisions'))) {
    if (name.startsWith('000-') || name.startsWith('goai-')) continue;
    const { data, content } = matter(body);

    const rawStatus = extractStatus(data, content);
    const isAcceptedOrPublished =
      rawStatus.includes('published') ||
      rawStatus.includes('accepted') ||
      /^0\d\d-/.test(name);
    if (!isAcceptedOrPublished || rawStatus.includes('internal') || rawStatus.includes('rejected')) {
      continue;
    }

    const slug = name.replace(/\.md$/, '');
    const title = extractTitle(data, content, slug);
    const date = extractDate(data, content, mtimeIso || '2026-10-01');

    const contextMatch = content.match(/##\s*Context\s*\n([\s\S]*?)(?=\n##\s|$)/i);
    const rawContext = contextMatch ? contextMatch[1].trim() : '';
    const firstParagraph = rawContext.split(/\n\n+/)[0]?.replace(/^\d+\.\s*/, '') || 'Architectural Decision Record.';
    const summaryText = stripMarkdownInline(data.summary || data.description || firstParagraph).slice(0, 260);

    // Strip duplicate H1 from body before rendering
    const bodyWithoutH1 = content.replace(/^#\s+.+\n*/m, '');

    entries.push({
      id: `decision-${slug}`,
      slug,
      date,
      kind: 'decision',
      title,
      status: 'Accepted',
      summaryText,
      summaryHtml: marked.parse(summaryText) as string,
      bodyHtml: marked.parse(bodyWithoutH1) as string,
      bulletsHtml: [],
      tags: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : ['architecture', 'adr', 'systems'],
      readingTimeMinutes: estimateReadingTime(content),
      url: `/decisions/${slug}`,
    });
  }
  return entries.sort((a, b) => (a.date !== b.date ? (a.date < b.date ? 1 : -1) : b.slug.localeCompare(a.slug)));
}

export function getEngineeringShowcases(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body, mtimeIso } of readDir(path.join(CONTENT, 'engineering'))) {
    if (name === 'project-alpha.md') continue;
    const { data, content } = matter(body);

    const status = extractStatus(data, content);
    if (status && status !== 'published' && status !== 'accepted') continue;

    const slug = name.replace(/\.md$/, '');
    const title = extractTitle(data, content, slug);
    const date = extractDate(data, content, mtimeIso || '2026-09-20');

    let summary = data.summary || data.description;
    if (!summary) {
      const problemMatch = content.match(/##\s*(?:The Problem|Context|Overview)\s*\n([\s\S]*?)(?=\n##\s|$)/i);
      if (problemMatch) {
        summary = problemMatch[1].trim().split('\n\n')[0];
      }
    }
    const summaryText = stripMarkdownInline(summary || 'Deep-dive architectural pattern and production case study.');
    const bodyWithoutH1 = content.replace(/^#\s+.+\n*/m, '');

    entries.push({
      id: `engineering-${slug}`,
      slug,
      date,
      kind: 'engineering',
      title,
      status: 'published',
      summaryText,
      summaryHtml: marked.parse(summaryText) as string,
      bodyHtml: marked.parse(bodyWithoutH1) as string,
      bulletsHtml: [],
      tags: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : ['golang', 'distributed-systems'],
      readingTimeMinutes: estimateReadingTime(content),
      url: `/showcase/${slug}`,
    });
  }
  return entries.sort((a, b) => (a.date !== b.date ? (a.date < b.date ? 1 : -1) : a.title.localeCompare(b.title)));
}

export function getBlogPosts(): FeedEntry[] {
  const entries: FeedEntry[] = [];
  for (const { name, body, mtimeIso } of readDir(path.join(CONTENT, 'blog'))) {
    const { data, content } = matter(body);

    const status = extractStatus(data, content);
    if (status && status !== 'published' && status !== 'accepted') continue;

    const slug = name.replace(/\.md$/, '');
    const title = extractTitle(data, content, slug);
    const date = extractDate(data, content, mtimeIso || '2026-09-24');

    let summary = data.summary || data.description;
    if (!summary) {
      const pMatch = content.replace(/^#\s+.+\n*/m, '').match(/([^\n#][^\n]+)/);
      summary = pMatch ? pMatch[1].trim() : 'Technical essay and engineering reflection.';
    }
    const summaryText = stripMarkdownInline(summary);
    const bodyWithoutH1 = content.replace(/^#\s+.+\n*/m, '');

    entries.push({
      id: `blog-${slug}`,
      slug,
      date,
      kind: 'blog',
      title,
      status: 'published',
      summaryText,
      summaryHtml: marked.parse(summaryText) as string,
      bodyHtml: marked.parse(bodyWithoutH1) as string,
      bulletsHtml: [],
      tags: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : ['engineering', 'systems'],
      readingTimeMinutes: estimateReadingTime(content),
      url: `/blog/${slug}`,
    });
  }
  return entries.sort((a, b) => (a.date !== b.date ? (a.date < b.date ? 1 : -1) : a.title.localeCompare(b.title)));
}

export function getFeed(): FeedEntry[] {
  return [...getBlogPosts(), ...getEngineeringShowcases(), ...getDecisions(), ...parseJournal()].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.kind === b.kind ? 0 : a.kind === 'blog' ? -1 : a.kind === 'engineering' ? -1 : a.kind === 'decision' ? -1 : 1;
  });
}
