import Menu from './Menu';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NavLinks = { url: string; name: string };

const leftSideLinks: NavLinks[] = [
  {
    url: '',
    name: 'Writing',
  },
  {
    url: '',
    name: 'Works',
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

  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter();

  return (
    <div
      className="flex justify-between items-center relative"
      style={{ minHeight: 70 }}
    >
      {!isPostNav && (
        <>
          <div
            className="h-screen w-px bg-gray-200 absolute left-0 hidden lg:block"
            style={{ top: -96 }}
          />
          <div
            className="h-screen w-px bg-gray-200 absolute right-0 hidden lg:block"
            style={{ top: -96 }}
          />
        </>
      )}
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
          {!isPostNav && (
            <>
              <div
                className="h-screen w-px bg-gray-200 absolute hidden lg:block"
                style={{ top: -96, right: -1, zIndex: -1 }}
              />
              <div
                className="h-screen w-px bg-gray-200 absolute hidden lg:block"
                style={{ top: -96, left: -1, zIndex: -1 }}
              />
            </>
          )}
          <Link href="/">
            <a className="cursor-pointer">
              <img src="/avatar.jpg" alt="Leonardo Dominguez's Avatar" />
            </a>
          </Link>
        </div>
      </div>
      <Menu className="hidden lg:flex">
        {!isPostNav ? (
          rightSideLinks.map((v) => (
            <MenuItem key={v.name}>
              <a href={v.url}>{v.name}</a>
            </MenuItem>
          ))
        ) : (
          <div className="flex items-center">
            <button
              className="focus:outline-none focus:shadow-outline rounded"
              onClick={() => setDarkMode(true)}
            >
              <MenuItem active={darkMode}>Dark </MenuItem>
            </button>
            <div className="mx-1">/</div>
            <button
              className="focus:outline-none focus:shadow-outline rounded"
              onClick={() => setDarkMode(false)}
            >
              <MenuItem active={!darkMode}>Light</MenuItem>
            </button>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Nav;
