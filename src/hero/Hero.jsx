import "./Hero.css";
import kunalIamge from "../assets/Kunal1.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kunalResume from "../assets/Kunal_Resume.pdf";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="hero-section" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 order-md-2 mb-4">
              <img
                src={kunalIamge}
                alt="Kunal"
                style={{ height: "300px", borderRadius: "40%" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-12 col-md-8 order-md-1">
              <p id="hello">Hello,</p>
              <h3 className="name">
                I'm <strong>Kunal</strong>
              </h3>
              <AnimatedText />
              <p>
                Versatile Software Developer skilled in Full Stack Java
                Development and cross-platform app development using Flutter.
                Proficient in Java, Spring Boot, RESTful APIs, and front-end
                technologies like HTML, CSS, Angular, and React. Experienced in
                building scalable web and mobile applications during an
                internship, with strong knowledge of MySQL and MongoDB. Quick
                learner passionate about delivering efficient web and mobile
                solutions.
              </p>
              <br />
              <a href={kunalResume} download="Kunal_Resume.pdf">
                <button className="btn btn-primary">
                  Download Resume <i class="bi bi-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
