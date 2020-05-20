import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { getClassName } from '../../lib/getClassName';

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Code: React.FC<CodeProps> = ({ className, ...props }) => {
  const elementClassName = getClassName({
    [className]: !!className,
    'rounded-md': !!className,
  });

  const containerClassName = getClassName({
    light: {
      'text-primary-500': true,
    },
    dark: {
      'text-pink-500': true,
    },
  });

  return !className ? (
    <span className={containerClassName}>
      `<code className={elementClassName} {...props} />`
    </span>
  ) : (
    <code className={elementClassName} {...props} />
  );
};

export default Code;
