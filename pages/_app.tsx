import '../styles/index.css';
import { DarkModeContextProvider } from '../lib/useDarkMode';
import Meta from '../components/shared/Meta';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <Meta />
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}

export default MyApp;
