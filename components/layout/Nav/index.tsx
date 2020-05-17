import Menu from './Menu';
import MenuItem from './MenuItem';

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

const Nav: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center relative"
      style={{ minHeight: 70 }}
    >
      <div
        className="h-screen w-px bg-gray-200 absolute left-0"
        style={{ top: -96 }}
      />
      <div
        className="h-screen w-px bg-gray-200 absolute right-0"
        style={{ top: -96 }}
      />
      <Menu>
        {leftSideLinks.map((v) => (
          <MenuItem key={v.name}>{v.name}</MenuItem>
        ))}
      </Menu>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: -1 }}
      >
        <div className="relative">
          <div
            className="h-screen w-px bg-gray-200 absolute"
            style={{ top: -96, right: -1 }}
          />
          <div
            className="h-screen w-px bg-gray-200 absolute"
            style={{ top: -96, left: -1 }}
          />
          <img src="/avatar.jpg" alt="Leonardo Dominguez's Avatar" />
        </div>
      </div>
      <Menu>
        {rightSideLinks.map((v) => (
          <MenuItem key={v.name}>{v.name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Nav;
