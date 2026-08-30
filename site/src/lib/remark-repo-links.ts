import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Artifacts cross-reference each other with repo-relative paths
 * (`../layers/0-identity/01-purpose-charter.md`) so the links work when the
 * markdown is read on GitHub. Those paths 404 on the site, where the same file
 * is served as `/layers/0-identity/01-purpose-charter`.
 *
 * This rewrites every repo-relative link to the route that serves it. Repo
 * files the site does not publish (e.g. `resources/*.md`) fall back to the
 * GitHub blob URL, so no link is left dangling either way.
 */

// src/lib/ -> src/ -> site/ -> repo root
const REPO_ROOT = fileURLToPath(new URL('../../../', import.meta.url));
const GITHUB_BLOB =
  'https://github.com/ecohubs-community/RCOS-ecohubs/blob/main/';

function toSiteRoute(repoPath: string): string | null {
  if (repoPath === 'compliance/checklist.md') return '/compliance';
  if (repoPath === 'resources/future-proposals.md') return '/proposals/future';

  let m = repoPath.match(/^proposals\/(passed|rejected)\/(.+)\.md$/);
  if (m) return `/proposals/${m[1]}/${m[2]}`;

  m = repoPath.match(/^layers\/([^/]+)\/(.+)\.md$/);
  if (m) return `/layers/${m[1]}/${m[2]}`;

  // A layer directory, or a subdirectory inside one (meeting-templates/) —
  // neither has a page of its own, so both resolve to the layer index.
  m = repoPath.match(/^layers\/([^/]+)(\/.*)?\/$/);
  if (m) return `/layers/${m[1]}`;

  return null;
}

export default function remarkRepoLinks() {
  return (tree: Root, file: { path?: string }) => {
    const from = file?.path;
    if (!from) return;

    visit(tree, 'link', (node) => {
      const url = node.url;
      // Skip absolute URLs, site-absolute paths, and bare fragments.
      if (!url || /^[a-z][a-z0-9+.-]*:/i.test(url)) return;
      if (url.startsWith('/') || url.startsWith('#')) return;

      const hashAt = url.indexOf('#');
      const target = hashAt === -1 ? url : url.slice(0, hashAt);
      const hash = hashAt === -1 ? '' : url.slice(hashAt);
      if (!target) return;

      const abs = path.resolve(path.dirname(from), target);
      let repoPath = path.relative(REPO_ROOT, abs).split(path.sep).join('/');
      if (repoPath.startsWith('..') || repoPath === '') return;
      if (target.endsWith('/')) repoPath += '/';

      node.url =
        (toSiteRoute(repoPath) ?? GITHUB_BLOB + repoPath.replace(/\/$/, '')) +
        hash;
    });
  };
}
