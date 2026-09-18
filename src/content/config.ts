import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const tech = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number(),
    skills: z.array(z.string()).default([]),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    videoUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
  }),
});

export const collections = { blog, tech, talks };
