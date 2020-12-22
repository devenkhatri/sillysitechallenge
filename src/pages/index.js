import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Unsplash from 'react-unsplash-wrapper'

const IndexPage = () => (
  <Layout darkText>
    <>
      <div id="overlay" />
      <div id="main">
        <Header />
        <Unsplash keywords="wallpapers, nature, sky, night" height="400" style={{ lineHeight: 2 }} expand >
        
        </Unsplash>
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
