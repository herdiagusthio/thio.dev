// Content layer: typed, schema-validated entries from the content collections (src/content.config.ts),
// mapped to the view model the pages render.

import { getCollection, type CollectionEntry } from 'astro:content';
import { estimateReadingTime, firstLine, sectionParagraph, stripMarkdownInline } from './text';

export type Kind = 'blog' | 'engineering' | 'decisions';

export interface Item {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  status: string;
  lang: 'en' | 'id';
  summaryText: string;
  readingTimeMinutes: number;
  url: string;
  entry: CollectionEntry<Kind>;
}

const URL_PREFIX: Record<Kind, string> = { blog: '/blog', engineering: '/showcase', decisions: '/decisions' };

// Frontmatter summary wins; otherwise derive one from the body the way each kind is written.
function summarize(kind: Kind, data: { summary?: string; description?: string }, body: string): string {
  const own = data.summary || data.description;
  if (kind === 'decisions') {
    const context = sectionParagraph(body, ['Context'])?.replace(/^\d+\.\s*/, '');
    return stripMarkdownInline(own || context || 'Architectural Decision Record.').slice(0, 260);
  }
  if (kind === 'engineering') {
    const problem = sectionParagraph(body, ['The Problem', 'Context', 'Overview']);
    return stripMarkdownInline(own || problem || 'Deep-dive architectural pattern and production case study.');
  }
  return stripMarkdownInline(own || firstLine(body) || 'Technical essay and engineering reflection.');
}

export async function getEntries(kind: Kind): Promise<Item[]> {
  const entries: CollectionEntry<Kind>[] = await getCollection(kind);
  const items = entries.map((entry) => {
    const body = entry.body ?? '';
    return {
      slug: entry.id,
      title: entry.data.title,
      date: entry.data.date,
      tags: entry.data.tags,
      status: entry.data.status,
      lang: entry.data.lang,
      summaryText: summarize(kind, entry.data, body),
      readingTimeMinutes: estimateReadingTime(body),
      url: `${URL_PREFIX[kind]}/${entry.id}`,
      entry,
    };
  });
  // Newest first; ADRs tie-break by number (descending), articles by title.
  return items.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return kind === 'decisions' ? b.slug.localeCompare(a.slug) : a.title.localeCompare(b.title);
  });
}
