import unified from 'unified';
import parse from 'remark-parse';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

export default function markdownToHtml(markdown: string) {
  return unified()
    .use(parse)
    .use(highlight)
    .use(html)
    .processSync(markdown)
    .toString();
}
