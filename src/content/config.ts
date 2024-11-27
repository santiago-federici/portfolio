import { defineCollection, z } from "astro:content";

const technologies = defineCollection({
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    textColor: z.string(),
    bgColor: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  technologies,
  projects,
};
