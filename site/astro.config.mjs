import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkStripFirstH1 from './src/lib/remark-strip-first-h1';
import remarkDirective from 'remark-directive';
import remarkRcosDirectives from './src/lib/remark-rcos-directives';
import rehypeTableWrap from './src/lib/rehype-table-wrap';
import remarkRepoLinks from './src/lib/remark-repo-links';

export default defineConfig({
  site: 'https://ecohubs.example',
  integrations: [svelte(), mdx()],
  markdown: {
    remarkPlugins: [remarkStripFirstH1, remarkDirective, remarkRcosDirectives, remarkRepoLinks],
    rehypePlugins: [rehypeTableWrap],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
