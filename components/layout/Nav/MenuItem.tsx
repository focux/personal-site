import { ClassNameProp } from 'types/common';
import classNames from 'classnames';

type MenuItem = ClassNameProp & { active?: boolean };

const MenuItem: React.FC<MenuItem> = ({ children, className, active }) => {
  const containerClassName = classNames({
    'border-primary-500 text-primary-500': active,
    [className]: className!!,
    'font-semibold uppercase text-base tracking-widest cursor-pointer hover:text-primary-500 transition ease-out duration-150 border-b-2 border-transparent hover:border-primary-500': true,
  });

  return <div className={containerClassName}>{children}</div>;
};

export default MenuItem;
