import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import Heading from '../shared/Heading';

const Hero: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(className, '');

  return (
    <div className={containerClassName}>
      <Heading level={1} className="text-center">
        Motivation is the first
        <br />
        step to <span className="text-primary-500 font-bold">success</span>.
      </Heading>
    </div>
  );
};

export default Hero;
