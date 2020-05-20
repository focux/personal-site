import { ClassNameProp } from 'types/common';
import { getClassName } from '../../../lib/getClassName';

const Menu: React.FC<ClassNameProp> = ({ children, className }) => {
  const containerClassName = getClassName({
    [className]: !!className,
    'flex space-x-20': true,
  });

  return <div className={containerClassName}>{children}</div>;
};

export default Menu;
