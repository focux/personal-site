import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Code: React.FC<CodeProps> = ({ className, ...props }) => {
  const elementClassName = classNames(className, '');
  const codeBlockClassName = classNames(className, 'rounded-md');

  console.log('classname', className);

  return !className ? (
    <span className="text-primary-500">
      `<code className={elementClassName} {...props} />`
    </span>
  ) : (
    <code className={codeBlockClassName} {...props} />
  );
};

export default Code;
