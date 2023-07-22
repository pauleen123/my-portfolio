import React from 'react';
import 'src/app/globals.css'
import Layout from '../src/components/Layout';
// import Layout from '../src/app/page';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}