import React, { Component } from 'react';

import './Gallery.css'
import gallery1 from './gallery_1.jpg'
import gallery2 from './gallery_2.jpg'
import gallery3 from './gallery_3.jpg'
import gallery4 from './gallery_4.jpg'
import gallery5 from './gallery_5.jpg'
import gallery6 from './gallery_6.jpg'

class Gallery extends Component {
  render() {
    return (
      <section id="gallery">
        <div className="wrap">
          <h2>Issue Twenty</h2>
          <h3>A visual guide to the Southwest</h3>
          <div className="masonry">
            <img src={gallery1} alt="Image" />
            <img src={gallery3} alt="Image" />
            <img src={gallery4} alt="Image" />
            <img src={gallery2} alt="Image" />
            <img src={gallery5} alt="Image" />
            <img src={gallery6} alt="Image" />
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery;
