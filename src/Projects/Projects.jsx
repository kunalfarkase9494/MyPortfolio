import './Projects.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);
    
  return (
    <>
    <div className="project-section" id="projects" >
      <div class="container text-center">
        <h1 className="heading">Projects</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 mb-3">
          <div className="box" data-aos="zoom-in">
                <h4>Voting Application</h4>
                <hr />
                <p>Developed a secure voting application using Spring Framework and Java, enabling users to
                cast and manage votes.
                </p>
                <a target="_blank"  href="https://github.com/kunalfarkase9494/VotingApplicationUsingSpringFramework">View in GitHub <i class="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3">
           
            <div className="box" data-aos="zoom-in">
                <h4>E-Commerce Website</h4>
                 <hr />
                <p>Developed a robust e-commerce website using Spring Boot and Java to handle product
                management, order processing, and user authentication.
                </p>
                <a target="_blank"  href="https://github.com/kunalfarkase9494/E-CommerceUsingSpringBoot">View in GitHub <i class="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3">
            <div className="box" data-aos="zoom-in">
                <h4>To-Do Application</h4>
                <hr />
                <p>Developed a dynamic to-do application using Java, JDBC, and Http Servlet to manage task
                creation, updating, and deletion.
                </p>
                <a target="_blank"  href="https://github.com/kunalfarkase9494/To-DoApplication">View in GitHub <i class="bi bi-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
