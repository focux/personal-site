import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<{ ids: any[]; css: any }> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    return { ...page };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/languages/typescript.min.js" /> */}
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
// https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/night-owl.min.css
