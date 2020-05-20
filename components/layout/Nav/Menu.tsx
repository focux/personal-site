import classNames from 'classnames';
import { ClassNameProp } from 'types/common';

const Menu: React.FC<ClassNameProp> = ({ children, className }) => {
  const containerClassName = classNames(className, 'flex space-x-20');

  return <div className={containerClassName}>{children}</div>;
};

export default Menu;
