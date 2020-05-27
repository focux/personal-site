import { createElement, Fragment } from 'react';
import unified from 'unified';
import Heading from '../components/shared/Heading';
import Paragraph from '../components/shared/Paragraph';
import Blockquote from '../components/shared/Blockquote';
import Code from '../components/shared/Code';
import Link from '../components/shared/Link';
import rehype2react from 'rehype-react';
import parse from 'rehype-parse';

export default function htmlToReact(html: string) {
  return (
    unified()
      .use(parse, { fragment: true } as any)
      .use(rehype2react, {
        createElement: createElement,
        Fragment: Fragment,
        components: {
          h2: (props) => <Heading level={3} {...props} />,
          p: Paragraph,
          blockquote: Blockquote,
          code: Code,
          a: (props) => <Link openInNewTab {...props} />,
        },
      })
      // @ts-ignore types are not up to date.
      .processSync(html).result
  );
}
