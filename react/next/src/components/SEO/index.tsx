import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface SEOProps extends NextSeoProps {}

const SEO: React.FC<SEOProps> = ({ ...props }) => {
  return <NextSeo {...props} />;
};

export default SEO;
