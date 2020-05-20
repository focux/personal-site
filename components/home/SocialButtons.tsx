import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';

const SocialButtons: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(
    className,
    'flex justify-center items-center relative',
  );

  const svgClasses =
    'hover:text-primary-500 fill-current transition ease-out duration-150';
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
