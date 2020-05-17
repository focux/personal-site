import { ClassNameProp } from 'types/common';
import classNames from 'classnames';

const MenuItem: React.FC<ClassNameProp> = ({ children, className }) => {
  const containerClassName = classNames(
    className,
    'font-semibold uppercase text-base tracking-widest hover:underline cursor-pointer',
  );
  return <li className={containerClassName}>{children}</li>;
};

export default MenuItem;
