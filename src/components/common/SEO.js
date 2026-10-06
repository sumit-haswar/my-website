import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description:
    'Sumit Haswar is a San Francisco-based software engineer working in Applied AI and building dependable, data-intensive systems.',
  title: 'Sumit Haswar — Software Engineer',
  url: 'https://www.sumithaswar.com',
  author: 'Sumit Haswar',
  keywords: [
    'Sumit Haswar',
    'software engineer',
    'Applied AI',
    'distributed systems',
    'San Francisco',
  ],
  twitterId: '@blue_floyd_',
  facebookId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:description" content={SEO_DATA.description} />
      <meta property="og:site_name" content="Sumit Haswar" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
