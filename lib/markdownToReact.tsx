import * as React from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import Heading from '../components/shared/Heading';
import Paragraph from '../components/shared/Paragraph';
import Blockquote from '../components/shared/Blockquote';
import Code from '../components/shared/Code';
import Link from '../components/shared/Link';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';

export default function markdownToReact(markdown: string) {
  return unified()
    .use(parse)
    .use(remark2rehype)
    .use(highlight)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      components: {
        h2: (props) => <Heading level={3} {...props} />,
        p: Paragraph,
        blockquote: Blockquote,
        code: Code,
        a: Link,
      },
    })
    // @ts-ignore types are not up to date. 
    .processSync(markdown).result;
}
