import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components';

const IndexContainer: NextPage = () => {
  return (
    <Layout.Content seo={{ title: 'Home' }}>
      <h1>Index</h1>
    </Layout.Content>
  );
};

export default IndexContainer;
