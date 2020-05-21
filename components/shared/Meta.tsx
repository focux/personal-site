import Head from 'next/head';

export default function Meta() {
  const description =
    "I'm a software developer interested in jamstack, mobile apps, user experience and new tech—now looking at Rust.";

  const url = 'https://focux.dev/';

  const title = 'Leonardo Dominguez';

  const ogImageUrl = `/api/org?title=${description}`;

  return (
    <Head>
      <meta name="theme-color" content="#000" />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@foocux" />
      <meta name="twitter:creator" content="@foocux" />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
