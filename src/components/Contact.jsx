import React from "react";
import "../assets/css/Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Me</h2>
          <p>
            Interested in working together? Feel free to contact me.
          </p>
        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />

              <div>
                <h3>Email</h3>
                <p>kotrangisaikumar668@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone className="contact-icon" />

              <div>
                <h3>Phone</h3>
                <p>+91 9392441048</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button
                type="submit"
                className="btn"
              >
                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;