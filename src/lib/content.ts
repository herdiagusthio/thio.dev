// Content layer: typed, schema-validated entries from the content collections (src/content.config.ts),
// mapped to the view model the pages render.

import { getCollection, type CollectionEntry } from 'astro:content';
import { estimateReadingTime, sectionParagraph, stripMarkdownInline } from './text';

export type Kind = 'blog' | 'engineering' | 'decisions';

export interface Item {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  status: string;
  lang: 'en' | 'id';
  featured: boolean;
  summaryText: string;
  readingTimeMinutes: number;
  url: string;
  entry: CollectionEntry<Kind>;
}

const URL_PREFIX: Record<Kind, string> = { blog: '/blog', engineering: '/showcase', decisions: '/decisions' };

// Articles must carry a frontmatter summary (content.config.ts); ADRs fall back to their Context paragraph.
function summarize(kind: Kind, data: { summary?: string; description?: string }, body: string): string {
  const own = data.summary || data.description;
  if (kind !== 'decisions') return stripMarkdownInline(own ?? '');
  const context = sectionParagraph(body, ['Context'])?.replace(/^\d+\.\s*/, '');
  return stripMarkdownInline(own || context || 'Architectural Decision Record.').slice(0, 260);
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
      featured: 'featured' in entry.data && entry.data.featured,
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
