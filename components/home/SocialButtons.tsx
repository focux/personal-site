import { ClassNameProp } from 'types/common';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { getClassName } from '../../lib/getClassName';

const SocialButtons: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = getClassName({
    [className]: !!className,
    'flex justify-center items-center relative': true,
  });

  const svgClasses = getClassName({
    'fill-current transition ease-out duration-150': true,
    dark: {
      'hover:text-pink-500': true,
    },
    light: {
      'hover:text-primary-500': true,
    },
  });

  const linkClasses = 'cursor-pointer mx-3';

  return (
    <div className={containerClassName}>
      <a
        href="https://twitter.com/foocux"
        rel="noopener"
        target="_blank"
        className={linkClasses}
      >
        <TwitterIcon className={svgClasses} />
      </a>
      <a
        href="https://github.com/focux"
        target="_blank"
        rel="noopener"
        className={linkClasses}
      >
        <GithubIcon className={svgClasses} />
      </a>
    </div>
  );
};

export default SocialButtons;
