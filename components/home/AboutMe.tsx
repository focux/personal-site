import { ClassNameProp } from 'types/common';
import classNames from 'classnames';

const AboutMe: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(className, 'text-2xl space-y-8 leading-relaxed');

  return (
    <div className={containerClassName}>
      <p>
        I'm a software developer interested in jamstack, mobile apps, user
        experience and under engineering.
      </p>
      <p>
        Right now I'm working with BenchApp helping to ease the burden of
        managing a sport team.
      </p>
      <p>
        I was born in Dominican Republic 🇩🇴, I love to go camping out in the
        mountains and working from the beach.
      </p>
    </div>
  );
};

export default AboutMe;
