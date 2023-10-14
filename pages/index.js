import React from 'react'
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Head from 'next/head';
import Layout from '@/components/Layout';

const Home = () => {
    return (
      <Layout>
        <Head>
          <title>paupau</title>
          <meta name="description" content="Pauline's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Layout>
    );
  };
  
  export default Home;