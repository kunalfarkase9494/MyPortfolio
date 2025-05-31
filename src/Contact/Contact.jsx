import React, { useState, useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", msg: "" }); // Clear form fields
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting the form. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contact-section" id="contact" data-aos="flip-down">
        <div className="container-fluid">
          <h1 className="text-center mb-6 getInTouch">Get In Touch</h1>
        </div>
        <div className="contact-form-container shadow-sm col-lg-8 mx-lg-auto bg-white p-3 p-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 mb-3">
              <textarea
                name="msg"
                className="form-control mb-3"
                onChange={handleChange}
                value={formData.msg}
                rows="3"
                placeholder="Enter your message"
                required
              />
              <button type="submit" className="btn btn-primary form-control mb-2">
                Send it
              </button>
            </div>
          </form>
          <div className="container text-center">
            <p>or</p>
            <h6>You can also find me on the following channels:</h6>
            <ul
              type="none"
              className="d-flex justify-content-center align-items-center gap-5"
            >
              <li data-aos="flip-right">
                <a
                  href="https://www.linkedin.com/in/kunal-farkase/"
                  target="_blank"
                  className="icon"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li data-aos="flip-right">
                <a
                  href="https://x.com/Kunal_49"
                  className="icon"
                  target="_blank"
                  style={{ color: "black" }}
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li data-aos="flip-right">
                <a
                  href="https://github.com/kunalfarkase9494"
                  target="_blank"
                  className="icon"
                  style={{ color: "black" }}
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default Contact;
