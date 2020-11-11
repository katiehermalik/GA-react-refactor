
import {Helmet} from "react-helmet";

import './Landing.css';
import Header from '../components/Landing/Header';
import Articles from '../components/Landing/Articles';
import About from '../components/Landing/About';
import Gallery from '../components/Landing/Gallery';
import Contact from '../components/Landing/Contact';
import articles from '../SeedData/articleData';
import Footer from '../components/Landing/Footer'


const articlesComponents = articles.map((article, index) => {
  return <Articles key={index} article={article} />
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
      <Footer />
    </>
  )
};

export default Landing;