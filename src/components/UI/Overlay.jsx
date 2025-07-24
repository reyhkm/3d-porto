import { Scroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Section = (props) => {
  const sectionRef = useRef();

  useFrame(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      sectionRef.current.classList.toggle('visible', isVisible);
    }
  });

  return <section ref={sectionRef} className="section" {...props} />;
};

const Overlay = () => {
  return (
    <Scroll html className="html-container">
      <div className="html-content">
        <Section>
          <h1>Hi, I'm John Doe.</h1>
          <p>A creative developer and 3D artist.</p>
        </Section>

        <Section>
          <h2>About Me</h2>
          <p>I build immersive and beautiful web experiences using modern technologies. My passion lies at the intersection of design, art, and code, creating digital products that are not only functional but also delightful to use.</p>
        </Section>

        <Section>
          <h2>My Projects</h2>
          <div className="card-container">
            <div className="card">
              <h3>Project One</h3>
              <p>An interactive data visualization platform.</p>
            </div>
            <div className="card">
              <h3>Project Two</h3>
              <p>A virtual reality art gallery experience.</p>
            </div>
            <div className="card">
              <h3>Project Three</h3>
              <p>A generative art installation using WebGL.</p>
            </div>
          </div>
        </Section>

        <Section>
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
