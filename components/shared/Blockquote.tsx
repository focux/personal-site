import { DetailedHTMLProps, BlockquoteHTMLAttributes } from 'react';
import classNames from 'classnames';

type BlockquoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Blockquote: React.FC<BlockquoteProps> = ({ className, ...props }) => {
  const elementClassName = classNames(className, 'border-l-4 border-primary-500 pl-4 text-gray-500');

  return <blockquote className={elementClassName} {...props} />;
};

export default Blockquote;
