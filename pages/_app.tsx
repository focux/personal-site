import '../styles/index.css';
import { DarkModeContextProvider } from '../lib/useDarkMode';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}

export default MyApp;
