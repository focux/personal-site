import { ClassNameProp } from 'types/common';
import classNames from 'classnames';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';

const SocialButtons: React.FC<ClassNameProp> = ({ className }) => {
  const containerClassName = classNames(
    className,
    'flex justify-center items-center relative',
  );

  const svgClasses = 'hover:text-primary-500 fill-current mx-3';
  const linkClasses = 'cursor-pointer';

  return (
    <div className={containerClassName}>
      {/* <div className="flex"> */}
        <div
          className="w-screen h-px bg-gray-200 absolute top-0"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        />
        <div
          className="w-screen h-px bg-gray-200 absolute bottom-0"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        />
        <a className={linkClasses}>
          <TwitterIcon className={svgClasses} />
        </a>
        <a className={linkClasses}>
          <GithubIcon className={svgClasses} />
        </a>
      {/* </div> */}
    </div>
  );
};

export default SocialButtons;
