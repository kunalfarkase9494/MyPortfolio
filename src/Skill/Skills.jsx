import './Skills.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {

  useEffect(() => {
        AOS.init({ duration: 1500 }); 
      }, []);
  return (
    <>
    <div className='skills-section' id='skills'>
    <div class="container text-center">
        <h1 className="heading1">Skills</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 mb-3">
          <div className="s-box" data-aos="flip-left">
            <span className='icon-background'><i class="bi bi-display"></i></span>
            <div className='mt-3'>
              <h4>Frontend</h4>
             <p class='px-3 skillPara'>
                HTML, CSS, JavaScript, Bootstrap,Flutter, ReactJS and Angular
              </p>
            </div>
                
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3">
           
            <div className="s-box" data-aos="flip-left">
            <span className='icon-background'><i class="bi bi-server"></i></span>
            <div className='mt-3'>
              <h4>Backend</h4>
              <p className='px-3 skillPara'>Java, Spring Boot, RESTful APIs, JDBC, Hibernate(ORM), Spring Frameworks
              </p>
            </div>
               
                
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3" data-aos="flip-left">
            <div className="s-box">
            <span className='icon-background'><i class="bi bi-box-arrow-in-right"></i></span>
            <div className='mt-3'>
              <h4>Others</h4>
              <p className='px-3 skillPara'>C-programming, SQL, Firebase, MongoDB
                MySQL,GitHub and Opreating System
              </p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>    
    </>
  )
}

export default Skills