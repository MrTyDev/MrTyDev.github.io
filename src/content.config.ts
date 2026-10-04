import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Tags drive the filter on the home page and the colour of generated covers.
// Their labels in each language live in src/i18n/ui.ts.
export const TAGS = {
  research: 'Research',
  defence: 'Defence',
  xai: 'Explainable AI',
  edge: 'Edge AI',
  llm: 'LLMs & agents',
  homelab: 'Homelab',
} as const;
export type Tag = keyof typeof TAGS;
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
      evidenceTitle: z.string().optional(), // defaults to "The numbers"
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

// Translations. A file in projects-zh/ with the same name as an English project
// overrides its text; pictures, tags and order always come from the English file.
const evidence = z.array(z.object({ label: z.string(), value: z.string() }));
const projectsZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects-zh' }),
  schema: z.object({
    title: z.string().optional(),
    summary: z.string().optional(),
    role: z.string().optional(),
    when: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    evidenceTitle: z.string().optional(),
    evidence: evidence.optional(),
    linkLabels: z.array(z.string()).optional(), // same order as the English links
    galleryAlts: z.array(z.string()).optional(), // same order as the English gallery
    galleryCaptions: z.array(z.string()).optional(),
    rackReplaces: z.string().optional(),
  }),
});

const notesZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes-zh' }),
  schema: z.object({ title: z.string().optional(), summary: z.string().optional() }),
});

export const collections = { projects, notes, projectsZh, notesZh };
