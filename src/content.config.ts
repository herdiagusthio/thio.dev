import { defineCollection } from 'astro:content';
import { decisionSchema, projectSchema, engineeringSchema } from './lib/schema';

const decisions = defineCollection({
  type: 'content',
  schema: decisionSchema,
});

const engineering = defineCollection({
  type: 'content',
  schema: engineeringSchema,
});

// Assuming projects are currently in engineering or to be added
// For now, let's setup the collections we found.
export const collections = {
  'decisions': decisions,
  'engineering': engineering,
};
