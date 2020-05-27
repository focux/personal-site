import { ClassNameProp } from 'types/common';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { getClassName } from '../../lib/getClassName';

type LinkProps = ClassNameProp &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { openInNewTab?: boolean };

const Link: React.FC<LinkProps> = ({ className, openInNewTab, ...props }) => {
  const containerClassName = getClassName({
    'b cursor-pointer transition ease-out duration-150 border-b-2 border-current hover:border-current': true,
    [className]: !!className,
    light: {
      'hover:text-primary-400 text-primary-500': true,
    },
    dark: {
      'hover:text-pink-400 text-pink-500': true,
    },
  });

  return (
    <a
      className={containerClassName}
      target={openInNewTab ? '_blank' : undefined}
      rel="noopener"
      {...props}
    />
  );
};

export default Link;
