import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Code: React.FC<CodeProps> = ({ className, ...props }) => {
  const elementClassName = classNames(className, '');

  return (
    <span className="text-primary-500">
      `<code className={elementClassName} {...props} />`
    </span>
  );
};

export default Code;
