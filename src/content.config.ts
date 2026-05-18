import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const travels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travels' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string().optional(),
    description: z.string(),
    cover: z.string(),
    photos: z.array(z.string()),
    video: z.string().optional(),
  }),
});

const laboratory = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/laboratory' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    cover: z.string(),
    photos: z.array(z.string()),
    materials: z.array(z.string()).optional(),
    dimensions: z.string().optional(),
  }),
});

export const collections = { travels, laboratory };