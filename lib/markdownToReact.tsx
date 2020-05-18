import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import Heading from '../components/shared/Heading';
import Paragraph from '../components/shared/Paragraph';
import Blockquote from '../components/shared/Blockquote';
import Code from '../components/shared/Code';
import Link from '../components/shared/Link';

export default function markdownToReact(markdown: string) {
  return (
    unified()
      .use(parse)
      .use(remark2react, {
        remarkReactComponents: {
          h2: (props) => <Heading level={3} {...props} />,
          p: Paragraph,
          blockquote: Blockquote,
          code: Code,
          a: Link,
        },
      })
      // @ts-ignore
      .processSync(markdown).result
  );
}
