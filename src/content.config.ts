import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			order: z.number(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			images: z
				.array(
					z.object({
						src: z.string(),
						alt: z.string().optional(),
					})
				)
				.optional(),
		}),
	}),
	projects: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/projects', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			order: z.number(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			images: z
				.array(
					z.object({
						src: z.string(),
						alt: z.string().optional(),
					})
				)
				.optional(),
		}),
	}),
	about: defineCollection({
		// New about collection - will contain only one file
		loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
