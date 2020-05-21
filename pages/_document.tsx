import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../config/constants';

export default class MyDocument extends Document<{ ids: any[]; css: any }> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    return { ...page };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/night-owl.min.css"
          />
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
