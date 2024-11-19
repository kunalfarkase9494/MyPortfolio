import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='hero-section' id='hero'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 order-md-2 mb-4">
            <img src="src/assets/Kunal1.jpg" alt="Kunal" style={{ height: '300px', borderRadius: '50%' }} />
          </div>
          <div className="col-12 col-md-8 order-md-1">
            <p>Hello,</p>
            <h3>I'm Kunal</h3>
            <h2>Java Full Stack Developer</h2>
            <p>
              Full stack Java Developer with proficiency in Java, Hibernate, Spring Framework, Spring Boot, 
              and RESTful APIs, and experience in front-end technologies like HTML, CSS, JavaScript, ReactJS and Angular. 
              Skilled in database management (MySQL, MongoDB). Quick learner with a passion for building scalable, 
              efficient web applications.
            </p>
            <br />
            <a href="src/assets/Kunal_Resume.pdf" download="Kunal's_Resume.pdf">
              <button className="btn btn-primary">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero;
