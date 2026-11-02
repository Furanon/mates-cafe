import { defineCollection } from 'astro:content';

/**
 * Content collections live here. The cafe currently keeps its menu, events and
 * page copy in source so the site stays fully static; add collections here when
 * editable content is needed.
 */
export const collections = {
  // Add cafe content collections here when needed.
} satisfies Record<string, ReturnType<typeof defineCollection>>;
