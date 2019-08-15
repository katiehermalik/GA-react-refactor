import React from 'react';
import Header from './Header/Header';
import Archive from './Archive/Archive';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Landing() {
  return (
    <div className="App">
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
