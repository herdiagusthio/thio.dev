import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Strict YYYY-MM-DD. YAML parses unquoted dates as Date; anything with a time fails the build
// rather than shifting a day through timezone conversion.
const day = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
);

const base = {
  title: z.string().min(1),
  date: day,
  tags: z.array(z.string()).min(1),
  summary: z.string().optional(),
  description: z.string().optional(),
  // Language of the content; the site chrome stays English. Pages put it on the title, lead and body.
  lang: z.enum(['en', 'id']).default('en'),
};

// The summary is the card text and the meta description, so articles must carry a real one.
const article = z.object({
  ...base,
  summary: z.string().min(40, 'summary must be at least 40 characters'),
  status: z.literal('published'),
  featured: z.boolean().default(false), // shown on the homepage (case studies)
});

export const collections = {
  blog: defineCollection({ loader: glob({ base: './content/blog', pattern: '*.md' }), schema: article }),
  engineering: defineCollection({ loader: glob({ base: './content/engineering', pattern: '*.md' }), schema: article }),
  decisions: defineCollection({
    loader: glob({ base: './content/decisions', pattern: '*.md' }),
    schema: z.object({ ...base, status: z.enum(['accepted', 'superseded']) }),
  }),
};
