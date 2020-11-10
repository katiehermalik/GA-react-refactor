import React from 'react';
import Header from '../components/LandingHeader';
import './Landing.css';
import Articles from '../components/Articles';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import articles from '../SeedData/articleData';

const articlesComponents = articles.map((a, index) => {
  return <Articles id={index} article={a} />
});

const Landing = (props) => {
  return(
    <>
      <Header />
      <section>
        <h2>From the Archive</h2>
        <div class="grid-wrapper articles">
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