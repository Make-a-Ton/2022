import * as React from "react";
import Head from "next/head";

interface HeadMetaPropTypes {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords?: string;
}

const HeadMeta = ({
  title,
  description,
  keywords = "",
  image,
  url,
}: HeadMetaPropTypes) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:url" property="og:url" content={url} />
      <meta name="og:image" property="og:image" content={image} />
      <meta name="twitter:card" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={url} />
      <meta property="twitter:image" content={image} />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
      <link rel="icon" type="image/svg" sizes="32x32" href="/logo.svg" />

      <link rel="icon" type="image/svg" sizes="16x16" href="/logo.svg" />
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="keywords" content={keywords} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default HeadMeta;
