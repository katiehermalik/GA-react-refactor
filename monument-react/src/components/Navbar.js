import React from 'react';

const Navbar = (props) => {
  return (
    <nav>
      <a className="hamburger" href="/"><i className="fa fa-bars"></i></a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;