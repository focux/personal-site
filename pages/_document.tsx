import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<{ ids: any[]; css: any }> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    return { ...page };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
