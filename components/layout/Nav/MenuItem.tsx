import { ClassNameProp } from 'types/common';
import classNames from 'classnames';

type MenuItem = ClassNameProp & { href?: string };

const MenuItem: React.FC<MenuItem> = ({ children, href, className }) => {
  const containerClassName = classNames(
    className,
    'font-semibold uppercase text-base tracking-widest cursor-pointer hover:text-primary-500 transiton ease-out duration-150 border-b-2 border-transparent hover:border-primary-500',
  );
  return (
    <li className={containerClassName}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default MenuItem;
