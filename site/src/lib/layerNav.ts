import { getCollection } from 'astro:content';
import layerMeta from '../data/layer-meta.json';
import { slugToTitle } from './titleCase';

export interface NavArtifact {
  href: string;
  title: string;
}

export interface NavLayer {
  number: number;
  slug: string;
  title: string;
  href: string;
  artifacts: NavArtifact[];
}

/**
 * Builds the sidebar tree: every layer with the artifacts it contains, in the
 * same order and with the same titles the layer index page uses.
 */
export async function buildLayerNav(): Promise<NavLayer[]> {
  const entries = await getCollection('layers');

  return layerMeta.map((layer) => {
    const artifacts = entries
      .filter((entry) => entry.id.startsWith(`${layer.slug}/`))
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((entry) => {
        const [, ...rest] = entry.id.split('/');
        const slug = rest.join('/');
        const firstH1 = entry.body?.match(/^#\s+(.+)$/m)?.[1]?.trim();
        return {
          href: `/layers/${layer.slug}/${slug}`,
          title: entry.data.title ?? firstH1 ?? slugToTitle(slug),
        };
      });

    return {
      number: layer.number,
      slug: layer.slug,
      title: layer.title,
      href: `/layers/${layer.slug}`,
      artifacts,
    };
  });
}
