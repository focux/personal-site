import * as React from 'react';

export interface DarkModeContextValue {
  setDarkMode: (enable?: boolean) => void;
  darkMode: boolean;
}

const DarkModeContext = React.createContext<DarkModeContextValue>(
  undefined as any,
);

export const DarkModeContextProvider: React.FC = (props) => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    // set default value for darkMode
    if (typeof window !== 'undefined') {
      const darkModeMQ = window.matchMedia('(prefers-color-scheme: dark)');

      setDarkMode(darkModeMQ.matches);
    }
  }, []);
  return (
    <DarkModeContext.Provider {...props} value={{ darkMode, setDarkMode }} />
  );
};

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);

  if (!context) {
    throw new Error("We didn't find the DarkModeContext");
  }

  return context;
};
