import React from 'react';
import Header from '../components/LandingHeader';
import './Landing.css';
import Articles from '../components/Articles';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import articles from '../SeedData/articleData';

import {Helmet} from "react-helmet";


const articlesComponents = articles.map((a, index) => {
  return <Articles key={index} article={a} />
});

const Landing = (props) => {
  return(
    <>
      <Helmet>
        <title>Monument | Home</title>
      </Helmet>
      <Header />
      <section>
        <h2>From the Archive</h2>
        <div className="grid-wrapper articles">
          {articlesComponents}
        </div>
      </section>
      <About />
      <Gallery />
      <Contact />
    </>
  )
};

export default Landing;