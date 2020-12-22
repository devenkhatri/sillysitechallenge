import React from 'react';
import config from '../../config'
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
        <Unsplash keywords="wallpapers, nature, sky, night" expand >
        <h1 style={{fontSize: "4em", fontWeight: "900", paddingBottom: "2rem"}}>{config.heading1}</h1>
        <h2 style={{fontSize: "2.5em", fontWeight: "300"}}>{config.heading2}</h2>
        <br />
        <p style={{fontSize: "1.5em"}}>{config.siteTitle}</p>
        </Unsplash>
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
