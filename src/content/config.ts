import { defineCollection, z } from 'astro:content';

// Blog / News & Insights
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('CORE Attorneys'),
    draft: z.boolean().default(false),
  }),
});

// Team members (language-independent, with bilingual bio fields)
const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position_de: z.string(),
    position_en: z.string(),
    bio_de: z.string(),
    bio_en: z.string(),
    image: z.string().default(''),
    email: z.string().email(),
    linkedin: z.string().url().optional(),
    phone: z.string().optional(),
    awards: z.array(z.string()).default([]),
    order: z.number().default(99),
    active: z.boolean().default(true),
  }),
});

// Job listings (multilingual)
const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string().default('Zürich, Schweiz'),
    type: z.string(),
    postedDate: z.coerce.date(),
    isActive: z.boolean().default(true),
    applyEmail: z.string().email().default('info@core-attorneys.com'),
  }),
});

// Expertise areas (multilingual)
const expertise = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, team, jobs, expertise };
