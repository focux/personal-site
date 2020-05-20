import { ClassNameProp } from 'types/common';
import Heading from '../shared/Heading';
import { getClassName } from '../../lib/getClassName';

const Hero: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = getClassName({
    [className]: !!className,
    'z-2 relative': true,
  });

  const highlightedTextClassName = getClassName({
    'font-bold': true,
    light: {
      'text-primary-500': true,
    },
    dark: {
      'text-pink-500': true,
    },
  });

  return (
    <div className={containerClassName}>
      <Heading level={1} className="text-center !text-4xl sm:!text-5xl">
        Motivation is the first <br />
        step to <span className={highlightedTextClassName}>success</span>.
      </Heading>
    </div>
  );
};

export default Hero;
