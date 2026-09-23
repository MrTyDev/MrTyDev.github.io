import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Tags drive the filter on the home page and the colour of generated covers.
export const TAGS = {
  defence: 'Defence',
  xai: 'Explainable AI',
  edge: 'Edge AI',
  llm: 'LLMs & agents',
  homelab: 'Homelab',
} as const;
const tag = z.enum(Object.keys(TAGS) as [keyof typeof TAGS, ...(keyof typeof TAGS)[]]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string().optional(),
      when: z.string().optional(),
      order: z.number().default(100), // lower shows first on the home page
      date: z.coerce.date(), // tie-breaker: newest first
      tags: z.array(tag).min(1),
      featured: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // How to crop the cover: 'center' for photos, 'top' for screenshots.
      coverPosition: z.enum(['center', 'top']).default('center'),
      coverCaption: z.string().optional(),
      evidenceTitle: z.string().default('The numbers'),
      evidence: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      stack: z.array(z.string()).default([]),
      // Pictures shown on the project page. `phone: true` for tall phone screenshots.
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional(), phone: z.boolean().default(false) }))
        .default([]),
      // Set this to show the project as a unit in the homelab rack.
      rack: z.object({ replaces: z.string(), order: z.number() }).optional(),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { projects, notes };
