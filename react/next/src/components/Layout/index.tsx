import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DefaultOptions as ReactQueryDefaultOptions,
} from 'react-query';
import { DefaultSeo } from 'next-seo';
import config from '@/config';
import { SEO, SEOProps } from '@/components';

export interface LayoutProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

export interface LayoutContentProps {
  children?: React.ReactNode;
  seo?: SEOProps;
}

export interface LayoutInterface extends React.FC<LayoutProps> {
  Content: React.FC<LayoutContentProps>;
}

const defaultOptions: ReactQueryDefaultOptions = {
  queries: {
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    retry: 1,
  },
};

if (config.NODE_ENV === 'dev' && typeof window !== 'undefined') {
  console.log(`Public Config Loaded`, config);
}

const Layout: LayoutInterface = ({ children, pageProps }) => {
  const client = React.useRef(new QueryClient({ defaultOptions }));

  return (
    <>
      <DefaultSeo />
      <main id='layout'>
        <RecoilRoot>
          <QueryClientProvider client={client.current}>
            <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
          </QueryClientProvider>
        </RecoilRoot>
      </main>
    </>
  );
};

Layout.Content = ({ children, seo }) => {
  return (
    <div id='layout-content'>
      {seo && <SEO {...seo} />}
      {children}
    </div>
  );
};

export default Layout;
