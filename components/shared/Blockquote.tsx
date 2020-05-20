import { DetailedHTMLProps, BlockquoteHTMLAttributes } from 'react';
import { getClassName } from '../../lib/getClassName';

type BlockquoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Blockquote: React.FC<BlockquoteProps> = ({ className, ...props }) => {
  const elementClassName = getClassName({
    [className]: !!className,
    'border-l-4 border-primary-500 pl-4 text-gray-500': true,
  });

  return <blockquote className={elementClassName} {...props} />;
};

export default Blockquote;
