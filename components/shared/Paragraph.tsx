import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { getClassName } from '../../lib/getClassName';

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  const elementClassName = getClassName({
    [className]: !!className,
    'leading-loose text-lg': true,
  });

  return <p className={elementClassName} {...props} />;
};

export default Paragraph;
