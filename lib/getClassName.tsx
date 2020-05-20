import { useDarkMode } from './useDarkMode';

interface Classes<T> {
  [classes: string]: T;
}

type ClassesWithDark = Classes<boolean | Classes<boolean>> & {
  dark?: { [classes: string]: boolean };
} & {
  light?: { [classes: string]: boolean };
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
        for (const darkClasses of Object.keys(classes['dark'])) {
          if (classes['dark'][darkClasses]) {
            activeClasses += ` ${darkClasses}`;
          }
        }
      }

      continue;
    }

    if (name === 'light') {
      if (!darkMode) {
        for (const lightClasses of Object.keys(classes['light'])) {
          if (classes['light'][lightClasses]) {
            activeClasses += ` ${lightClasses}`;
          }
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
