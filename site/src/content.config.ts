import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const layers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../layers' }),
  schema: z
    .object({
      title: z.string().optional(),
    })
    .passthrough(),
});

const proposals = defineCollection({
  loader: glob({ pattern: '{passed,rejected}/*.md', base: '../proposals' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.enum(['passed', 'rejected']),
    layers: z.array(z.number().int().min(0).max(6)),
    decision_type: z.enum(['strategic', 'operational', 'constitutional']),
    vote_result: z.string().optional(),
    summary: z.string(),
  }),
});

const compliance = defineCollection({
  loader: glob({ pattern: 'checklist.md', base: '../compliance' }),
  schema: z.object({}).passthrough(),
});

const future = defineCollection({
  loader: glob({ pattern: 'future-proposals.md', base: '../resources' }),
  schema: z.object({}).passthrough(),
});

const faq = defineCollection({
  loader: glob({ pattern: 'faq.md', base: './src/content/faq' }),
  schema: z.object({
    items: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { layers, proposals, compliance, future, faq };
