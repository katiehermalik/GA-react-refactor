import about from '../../SeedData/aboutData';

const About = () => {
  return (
    <section id="about" className="callout about">
      <article className="wrap">
        <h2>{about.title}</h2>
        <h3>{about.tagline}</h3>
        <p>{about.contentOne}</p>
        <p>{about.contentTwo}</p>
      </article>
    </section>
  );
};

export default About;