import { DetailedHTMLProps, BlockquoteHTMLAttributes } from 'react';
import { getClassName } from '../../lib/getClassName';3

type BlockquoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Blockquote: React.FC<BlockquoteProps> = ({ className, ...props }) => {
  const elementClassName = getClassName({
    [className]: !!className,
    'border-l-4 pl-4 italic': true,
    light: {
      'border-primary-500 text-gray-800': true,
    },
    dark: {
      'border-pink-500 text-gray-300': true,
    },
  });

  return <blockquote className={elementClassName} {...props} />;
};

export default Blockquote;
