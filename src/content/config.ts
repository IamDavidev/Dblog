import { defineCollection, z } from 'astro:content'

const schemaBlog = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()),
  lang: z.string().optional().default('en'),
  author: z.string().optional().default('David Lezam')
})

const blog = defineCollection({
  type: 'content',
  schema: schemaBlog
})

export const collections = { blog }

export type BlogPost = z.infer<typeof schemaBlog>
