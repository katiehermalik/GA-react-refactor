import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  return (
    <nav>
      <a className="hamburger" href="/"><FontAwesomeIcon icon={faBars} /></a>
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