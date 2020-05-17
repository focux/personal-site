import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & { level?: 1 | 2 | 3 };

const Heading: React.FC<HeadingProps> = ({
  className,
  level = 2,
  ...props
}) => {
  const containerClassName = classNames({
      [className]: !!className,
    'text-5xl font-light leading-tight': level === 1,
    'text-2xl font-medium tracking-wide': level === 2,
    'text-xl font-medium': level === 3,
  });

  const Component = (`h${level}` as any) as React.FC<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  >;

  return <Component className={containerClassName} {...props} />;
};

export default Heading;
