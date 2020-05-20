import { ClassNameProp } from 'types/common';
import { getClassName } from '../../../lib/getClassName';

type MenuItem = ClassNameProp & { active?: boolean };

const MenuItem: React.FC<MenuItem> = ({ children, className, active }) => {
  const containerClassName = getClassName({
    light: {
      'text-primary-500': active,
      'hover:text-primary-500': true,
    },
    dark: {
      'text-pink-500': active,
      ' hover:text-pink-500': true,
    },
    'border-current': active,
    [className]: !!className,
    'font-semibold uppercase text-base tracking-widest cursor-pointer transition ease-out duration-150 border-b-2 border-transparent hover:border-current': true,
  });

  return <div className={containerClassName}>{children}</div>;
};

export default MenuItem;
