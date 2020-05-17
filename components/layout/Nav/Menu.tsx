import classNames from 'classnames';
import { ClassNameProp } from 'types/common';

const Menu: React.FC<ClassNameProp> = ({ children, className }) => {
  const containerClassName = classNames(className, 'flex space-x-20');

  return <ul className={containerClassName}>{children}</ul>;
};

export default Menu;
