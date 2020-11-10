import React from 'react';
import about from '../SeedData/aboutData'

const About = (props) => {
  return (
    <section id="about" class="callout about">
      <article class="wrap">
        <h2>{about.title}</h2>
        <h3>{about.tagline}</h3>
        <p>{about.contentOne}</p>
        <p>{about.contentTwo}</p>
      </article>
    </section>
  )
};

export default About;