import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import clauses from '../data/rcos-clauses.json';
import layerUrls from '../data/rcos-layer-urls.json';

/**
 * Transforms two markdown directive blocks into HTML accordions (native <details>):
 *
 *   :::rcos{clauses="2.1.1, 2.1.2"}
 *   :::
 *
 *   :::rationale{title="Why a single purpose?"}
 *   Purpose changes require a Constitutional decision…
 *   :::
 *
 * The `rcos` block looks up each clause number in rcos-clauses.json (generated
 * from the RCOS Standard spec) and emits verbatim text plus a link to the section
 * on rcos.ecohubs.community. Clause numbers may be comma- or space-
 * separated. Any unknown clause is emitted as an inline error comment so build
 * output surfaces mistakes without failing the build.
 */

type ClauseInfo = {
  text: string;
  layer: number;
  layerUrl: string;
  sectionAnchor: string;
  sectionHeading: string;
};

type LayerInfo = { url: string };

const clauseMap = clauses as Record<string, ClauseInfo>;
const layerMap = layerUrls as Record<string, LayerInfo>;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseClauseList(raw: string): string[] {
  return raw
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function remarkRcosDirectives() {
  return (tree: Root) => {
    visit(tree, (node: any) => {
      if (
        node.type !== 'containerDirective' &&
        node.type !== 'leafDirective' &&
        node.type !== 'textDirective'
      ) {
        return;
      }

      if (node.name === 'rcos') {
        const attrs = node.attributes ?? {};
        const clauseList = parseClauseList(attrs.clauses ?? attrs.clause ?? '');
        const items: string[] = [];
        let layerUrl: string | null = null;
        let firstAnchor: string | null = null;

        for (const num of clauseList) {
          const info = clauseMap[num];
          if (!info) {
            items.push(
              `<li class="rcos-clause rcos-clause-missing"><strong>${escapeHtml(num)}</strong> — <em>clause not found in registry</em></li>`
            );
            continue;
          }
          if (!layerUrl) layerUrl = info.layerUrl;
          if (!firstAnchor) firstAnchor = info.sectionAnchor;
          items.push(
            `<li class="rcos-clause"><strong>${escapeHtml(num)}</strong> ${escapeHtml(info.text)}</li>`
          );
        }

        const deepLink =
          layerUrl && firstAnchor ? `${layerUrl}#${firstAnchor}` : layerUrl ?? '#';
        const sectionLabel = clauseList.length
          ? clauseMap[clauseList[0]]?.sectionHeading ?? 'RCOS spec'
          : 'RCOS spec';

        const html = `<details class="accordion accordion-rcos"><summary><span class="accordion-title">RCOS definition</span><span class="accordion-hint">${escapeHtml(clauseList.join(', '))}</span></summary><div class="accordion-body"><ul class="rcos-clauses">${items.join('')}</ul><p class="accordion-link"><a href="${deepLink}" target="_blank" rel="noopener">Read ${escapeHtml(sectionLabel)} in the RCOS spec <span class="arrow">↗</span></a></p></div></details>`;

        node.type = 'html';
        node.value = html;
        node.children = undefined;
        return;
      }

      if (node.name === 'rationale') {
        const attrs = node.attributes ?? {};
        const title = attrs.title ?? 'Why this matters';
        // Stringify child nodes back to markdown-ish. Use raw markdown from
        // the original source by converting child text + paragraphs.
        const body = stringifyChildren(node.children ?? []);
        const html = `<details class="accordion accordion-rationale"><summary><span class="accordion-title">${escapeHtml(title)}</span></summary><div class="accordion-body accordion-body-prose">\n\n${body}\n\n</div></details>`;
        node.type = 'html';
        node.value = html;
        node.children = undefined;
        return;
      }
    });
  };
}

// Re-serialize child mdast nodes back to markdown source so Astro's markdown
// pipeline re-parses them (preserves inline formatting, links, lists).
function stringifyChildren(children: any[]): string {
  return children.map(stringifyNode).join('\n\n').trim();
}

function stringifyNode(node: any): string {
  switch (node.type) {
    case 'paragraph':
      return (node.children ?? []).map(stringifyInline).join('');
    case 'list': {
      const ordered = node.ordered;
      return (node.children ?? [])
        .map((item: any, i: number) => {
          const marker = ordered ? `${i + 1}.` : '-';
          const body = (item.children ?? []).map(stringifyNode).join('\n\n');
          return `${marker} ${body}`;
        })
        .join('\n');
    }
    case 'heading': {
      const prefix = '#'.repeat(node.depth);
      return `${prefix} ${(node.children ?? []).map(stringifyInline).join('')}`;
    }
    case 'blockquote':
      return (node.children ?? [])
        .map((c: any) => '> ' + stringifyNode(c).replace(/\n/g, '\n> '))
        .join('\n');
    case 'code':
      return '```' + (node.lang ?? '') + '\n' + (node.value ?? '') + '\n```';
    case 'thematicBreak':
      return '---';
    case 'html':
      return node.value ?? '';
    default:
      return (node.children ?? []).map(stringifyInline).join('');
  }
}

function stringifyInline(node: any): string {
  switch (node.type) {
    case 'text':
      return node.value ?? '';
    case 'strong':
      return '**' + (node.children ?? []).map(stringifyInline).join('') + '**';
    case 'emphasis':
      return '*' + (node.children ?? []).map(stringifyInline).join('') + '*';
    case 'inlineCode':
      return '`' + (node.value ?? '') + '`';
    case 'link':
      return (
        '[' + (node.children ?? []).map(stringifyInline).join('') + '](' + node.url + ')'
      );
    case 'break':
      return '\n';
    default:
      return (node.children ?? []).map(stringifyInline).join('');
  }
}
