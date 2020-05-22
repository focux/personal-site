import Head from 'next/head';

type MetaProps = {
  description: string;
  title: string;
  imageUrl: string;
  url: string;
};

const Meta: React.FC<MetaProps> = ({ description, title, imageUrl, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#000" />
      <meta property="og:image" content={imageUrl} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@foocux" />
      <meta name="twitter:creator" content="@foocux" />
    </Head>
  );
};

export default Meta;
