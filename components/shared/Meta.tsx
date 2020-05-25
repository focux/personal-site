import Head from 'next/head';

type MetaProps = {
  description: string;
  title: string;
  imageUrl: string;
  url: string;
};

const Meta: React.FC<MetaProps> = ({
  description,
  title,
  imageUrl,
  url,
  children,
}) => {
  return (
    <Head>
      {/* Primary Meta Tags*/}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@foocux" />
      <meta name="twitter:creator" content="@foocux" />
      {children}
    </Head>
  );
};

export default Meta;
