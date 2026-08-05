import React from "react";
import "../assets/css/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  };

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-container">

          {/* Left */}

          <div className="footer-about">

            <h2>

              Sai<span>DevOps</span>

            </h2>

            <p>

              Azure DevOps Engineer passionate about
              Cloud Computing,
              Azure,
              Kubernetes,
              Docker,
              Terraform,
              Automation,
              CI/CD,
              Infrastructure as Code
              and Platform Engineering.

            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-links">

            <h3>

              Quick Links

            </h3>

            <ul>

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#experience">Experience</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#resume">Resume</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-contact">

            <h3>

              Contact

            </h3>

            <p>

              Hyderabad, India

            </p>

            <p>

              yourmail@gmail.com

            </p>

            <div className="footer-social">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub/>

              </a>

              <a
                href="https://www.linkedin.com/in/saikumar-kotrangi-8a366b267/"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin/>

              </a>

              <a
                href="mailto:kotrangisaikumar668@gmail.com"
              >

                <FaEnvelope/>

              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>

            © {new Date().getFullYear()} Saikumar |
            Azure DevOps Engineer |
            All Rights Reserved.

          </p>

          <button

            className="top-button"

            onClick={scrollTop}

          >

            <FaArrowUp/>

          </button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;