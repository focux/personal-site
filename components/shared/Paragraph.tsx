import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  const elementClassName = classNames(className, 'leading-loose');

  return <p className={elementClassName} {...props} />;
};

export default Paragraph;
