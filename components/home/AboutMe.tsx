import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import Link from '../shared/Link';

const AboutMe: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(
    className,
    'text-2xl space-y-8 leading-relaxed',
  );

  return (
    <div className={containerClassName}>
      <p>
        I'm a software developer interested in jamstack, mobile apps, user
        experience and under engineering.
      </p>
      <p>
        Right now I'm working with{' '}
        <Link href="https://benchapp.com" openInNewTab>
          BenchApp
        </Link>{' '}
        helping to ease the burden of managing a sport team.
      </p>
      <p>
        I was born in Dominican Republic{' '}
        <span role="img" aria-label="Dominican Republic Flag">
          🇩🇴
        </span>
        , I love to go camping out in the mountains and working from the beach.
      </p>
    </div>
  );
};

export default AboutMe;
