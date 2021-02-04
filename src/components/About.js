import Me from '../assets/meatrooftop.png';

const About = () => (
  <section id="about">
    <div className="text">
      <h1>About Me</h1>
      <p>
        I am a IXth graded student, who lives in Bangladesh. <br />
        I love to code very much, especially creating web apps and servers. {''}
      </p>
    </div>
    <div className="img">
      <img src={Me} alt="Loading Image..." />
    </div>
  </section>
);

export default About;
