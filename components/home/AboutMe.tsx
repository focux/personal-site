import { ClassNameProp } from 'types/common';
import Link from '../shared/Link';
import { getClassName } from '../../lib/getClassName';

const AboutMe: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = getClassName({
    [className]: !!className,
    'text-xl sm:text-2xl space-y-8 leading-relaxed z-2 relative': true,
  });

  return (
    <div className={containerClassName}>
      <p>
        I'm a software developer interested in jamstack, mobile apps, user
        experience and new tech —now looking at Rust.
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
        , I love to go camping in the mountains and working from the beach.
      </p>
    </div>
  );
};

export default AboutMe;
