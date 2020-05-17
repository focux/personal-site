import { ClassNameProp } from 'types/common';
import classNames from 'classnames';

const Hero: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(className, '');

  return (
    <div className={containerClassName}>
      <h1 className="text-5xl text-center font-light leading-tight">
        Motivation is the first
        <br />
        step to <span className="text-primary-500 font-bold">success</span>.
      </h1>
    </div>
  );
};

export default Hero;
