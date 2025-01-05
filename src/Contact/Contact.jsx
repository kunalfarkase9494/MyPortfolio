import React, { useState,useEffect } from 'react'
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

     useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully");
    
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          msg: ''
        });
    }
    
  return (
    <>
        <div className='contact-section' id='contact' data-aos="flip-down">
        <div className='container-fluid'>
            <h1 className='text-center mb-6'>Get In Touch</h1>
        </div>
        <div className='contact-form-container shadow-sm col-lg-8 mx-lg-auto bg-white p-3 p-lg-5'>
            <form action="#" onSubmit={handleSubmit} method='post' >
            <div className='row '>    
                <div class="col-md-6 col-sm-12 mb-3" >
                    <input type="text" name='name' className='form-control '  onChange={handleChange} value={formData.name} placeholder='Name'/>
                </div>
                <div className='col-md-6 col-sm-12 mb-3'>
                    <input type="email" name='email' className='form-control'  onChange={handleChange} value={formData.email} placeholder='Email'/> 
                </div>
            </div>
            <div className='col-sm-12 mb-3'>
            <textarea type="text" name='msg' className='form-control mb-3'  onChange={handleChange} value={formData.msg} rows='3' placeholder='Enter your message'/>
            <button type='submit' className='btn btn-primary form-control mb-2'>Send it</button> 
            </div>
            </form>   
            <div className='container text-center'>
                <p>or</p>
            <h6>You can also find me on the following channels :</h6>
            <ul type='none' className='d-flex justify-content-center align-items-center gap-5'>
            <li data-aos="flip-right"><a href="https://www.linkedin.com/in/kunal-farkase/" target="_blank"  className='icon'><i class="bi bi-linkedin"></i></a></li>
            <li data-aos="flip-right"><a href="https://x.com/Kunal_49" className='icon' target="_blank"  style={{color:'black'}}><i class="bi bi-twitter-x"></i></a></li>
            <li data-aos="flip-right"><a href='https://github.com/kunalfarkase9494' target="_blank"  className='icon' style={{color:'black'}}><i class="bi bi-github"></i></a></li>
            </ul>
            </div> 
        </div>        
        </div>
    </>
  )
}

export default Contact
