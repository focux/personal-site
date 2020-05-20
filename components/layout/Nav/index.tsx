import Menu from './Menu';
import MenuItem from './MenuItem';
import Link from 'next/link';
import { useDarkMode } from '../../../lib/useDarkMode';

type NavLinks = { url: string; name: string };

const leftSideLinks: NavLinks[] = [
  {
    url: '#writing',
    name: 'Writing',
  },
];

const rightSideLinks: NavLinks[] = [
  {
    url: '',
    name: 'Contact',
  },
];

type NavProps = { type?: 'regular' | 'post' };

const Nav: React.FC<NavProps> = ({ type = 'regular' }) => {
  const isPostNav = type === 'post';

  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav
      className="flex justify-between items-center relative"
      style={{ minHeight: 70 }}
    >
      <Menu className="z-10 hidden lg:flex">
        {!isPostNav ? (
          leftSideLinks.map((v) => (
            <MenuItem key={v.name}>
              <a href={v.url}>{v.name}</a>
            </MenuItem>
          ))
        ) : (
          <MenuItem>
            <Link href="/">
              <a>Back</a>
            </Link>
          </MenuItem>
        )}
      </Menu>
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          <Link href="/">
            <a className="cursor-pointer">
              <img src="/avatar.png" alt="Leonardo Dominguez's Avatar" />
            </a>
          </Link>
        </div>
      </div>
      <Menu className="hidden lg:flex">
        {false ? (
          rightSideLinks.map((v) => (
            <MenuItem key={v.name}>
              <a href={v.url}>{v.name}</a>
            </MenuItem>
          ))
        ) : (
          <div className="flex items-center">
            <button
              className="focus:outline-none focus:shadow-outline rounded"
              onClick={() => setDarkMode(false)}
            >
              <MenuItem active={!darkMode}>Light</MenuItem>
            </button>
            <div className="mx-1">/</div>
            <button
              className="focus:outline-none focus:shadow-outline rounded"
              onClick={() => setDarkMode(true)}
            >
              <MenuItem active={darkMode}>Dark</MenuItem>
            </button>
          </div>
        )}
      </Menu>
    </nav>
  );
};

export default Nav;
