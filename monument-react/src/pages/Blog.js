
import {Helmet} from "react-helmet";

import './Blog.css';
import Header from '../components/Blog/Header';
import Post from '../components/Blog/Post';
import AboutUs from '../components/Blog/AboutUs';
import Issues from '../components/Blog/Issues';
import Comment from '../components/Blog/Comment';
import Footer from '../components/Blog/Footer';



function Blog() {
  return (
    <>
      <Helmet>
        <title>Monument | Blog</title>
      </Helmet>
      <Header />
      <div className="wrap grid-wrapper">
        <section>
          <Post />
        </section>
        <aside>
          <AboutUs />
          <Issues />
        </aside>
      </div>
      <Comment />
      <Footer />
    </>
  )
};

export default Blog;

