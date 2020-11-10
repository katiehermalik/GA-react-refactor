import React from 'react';
import images from '../SeedData/galleryData';
import articles from '../SeedData/articleData';


const galleryTagline = 'A visual guide to' 
const galleryImages = images.map((image, index) => {
  return <img src={image.image} alt={index}/>
});

const Gallery = () => {
  return (
    <section id="gallery">
      <div class="wrap">
        <h2>{articles[0].issue}</h2>
        <h3>{galleryTagline} {articles[0].issueTopic}</h3>
        <div class="masonry">
          {galleryImages}
        </div>
      </div>
    </section>
  )
};

export default Gallery;