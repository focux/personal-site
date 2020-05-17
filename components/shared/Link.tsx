import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

type LinkProps = ClassNameProp &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { openInNewTab?: boolean };

const Link: React.FC<LinkProps> = ({ className, openInNewTab, ...props }) => {
  const containerClassName = classNames(
    'b cursor-pointer hover:text-primary-500 transiton ease-out duration-150 border-b-2 border-black hover:border-primary-500',
    className,
  );

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
