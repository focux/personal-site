import '../styles/index.css';
import { DarkModeContextProvider } from '../lib/useDarkMode';
import { useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
};

export default App;
