import { useDarkMode } from './useDarkMode';

interface Classes<T> {
  [classes: string]: T;
}

type ClassesWithDark = Classes<boolean | Classes<boolean>> & {
  dark?: { [classes: string]: boolean };
};

export const getClassName = (classes: ClassesWithDark) => {
  const { darkMode } = useDarkMode();
  const names = Object.keys(classes)
    .map((v) => v.trim())
    .filter((v) => v);

  let activeClasses = '';

  for (const name of names) {
    if (name === 'dark') {
      if (darkMode) {
        for (const darkModeClassName of Object.keys(classes['dark'])) {
          activeClasses += ` ${darkModeClassName}`;
        }
      }

      continue;
    }

    if (classes[name]) {
      activeClasses += ` ${name}`;
    }
  }

  return activeClasses.trim();
};
