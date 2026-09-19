import { z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  links: z.array(z.string()).default([]), // Semantic cross-links (slugs or URLs)
});

export const decisionSchema = baseSchema.extend({
  status: z.enum(['proposed', 'accepted', 'rejected', 'superseded']),
  context: z.string().optional(),
  project: z.string().optional(), // Reference to a project slug
});

export const projectSchema = baseSchema.extend({
  tech: z.array(z.string()).default([]),
  repo: z.string().url().optional(),
  demo: z.string().url().optional(),
});

export const engineeringSchema = baseSchema.extend({
  category: z.string().default('general'),
});
