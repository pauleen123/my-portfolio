import React from 'react';
import 'src/app/globals.css'
import Layout from '@/components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}