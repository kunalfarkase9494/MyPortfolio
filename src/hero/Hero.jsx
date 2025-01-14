import './Hero.css';
import kunalIamge from '../assets/Kunal1.jpg';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kunalResume from '../assets/Kunal_Resume.pdf';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className='hero-section' id='hero' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 order-md-2 mb-4">
              <img src={kunalIamge} alt="Kunal" style={{ height: '300px', borderRadius: '50%' }} />
            </div>
            <div className="col-12 col-md-8 order-md-1">
              <p id='hello'>Hello,</p>
              <h3>I'm <strong>Kunal</strong></h3>
              <h2>Java Full Stack Developer</h2>
              <p>
                I am a skilled full-stack Java developer with expertise in Java, Hibernate, Spring Framework, Spring Boot, and RESTful APIs. Proficient in front-end technologies like HTML, CSS, JavaScript, ReactJS, and Angular, I have a strong background in database management, including MySQL and MongoDB. A quick learner with a passion for building scalable and efficient web applications, I thrive in developing innovative solutions that deliver exceptional user experiences
              </p>
              <br />
              <a href={kunalResume} download="Kunal_Resume.pdf">
                <button className="btn btn-primary">Download Resume <i class="bi bi-download"></i></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
