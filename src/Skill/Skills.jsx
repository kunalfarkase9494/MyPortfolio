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
        <h1 className="heading">Skills</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 mb-3">
          <div className="s-box" data-aos="flip-left">
            <span className='icon-background'><i class="bi bi-display"></i></span>
            <div className='mt-3'>
              <h4>Frontend</h4>
              <ul className='ulist'>
                <li>HTML, CSS, JavaScript, Bootstrap</li>
                <li>ReactJS and Angular</li>
              </ul>
            </div>
                
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3">
           
            <div className="s-box" data-aos="flip-left">
            <span className='icon-background'><i class="bi bi-server"></i></span>
            <div className='mt-3'>
              <h4>Backend</h4>
              <ul className='ulist'>
                <li>Java(JSE/JEE), JDBC, Hibernate(ORM)</li>
                <li>Spring Frameworks and Spring Boot</li>
              </ul>
            </div>
               
                
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3" data-aos="flip-left">
            <div className="s-box">
            <span className='icon-background'><i class="bi bi-box-arrow-in-right"></i></span>
            <div className='mt-3'>
              <h4>Others</h4>
              <ul className='ulist'>
                <li>C-programming, SQL</li>
                <li>MongoDB, MySQL and GitHub</li>
              </ul>
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