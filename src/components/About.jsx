import React from "react";
import "../assets/css/About.css";
import profile from "../assets/images/profile.jpg";
import { FaUserGraduate, FaBriefcase, FaCloud, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>
            Learn more about my journey, technical expertise, and passion for
            Azure Cloud and DevOps Engineering.
          </p>
        </div>

        <div className="about-container">

          {/* Left Side */}
          <div className="about-image">
            <img src={profile} alt="Saikumar" />
          </div>

          {/* Right Side */}
          <div className="about-content">

            <h3>Hello! I'm Saikumar</h3>

            <p>
              I am an Azure DevOps Engineer with around 2.4 years of experience
              in designing, automating, deploying, monitoring, and managing
              cloud infrastructure using Microsoft Azure. I enjoy building
              scalable CI/CD pipelines, working with Infrastructure as Code,
              Docker, Kubernetes, and cloud automation.
            </p>

            <div className="about-info">

              <div className="info-card">
                <FaBriefcase className="icon" />
                <h4>Experience</h4>
                <p>2.4+ Years</p>
              </div>

              <div className="info-card">
                <FaCloud className="icon" />
                <h4>Specialization</h4>
                <p>Azure DevOps & Cloud</p>
              </div>

              <div className="info-card">
                <FaUserGraduate className="icon" />
                <h4>Learning</h4>
                <p>AKS, Terraform, GitOps</p>
              </div>

            </div>

            <div className="about-details">

              <div>
                <strong>Name:</strong> Saikumar 
              </div>

              <div>
                <strong>Role:</strong> Azure DevOps Engineer
              </div>

              <div>
                <strong>Location:</strong> Hyderabad, India
              </div>

              <div>
                <strong>Email:</strong> kotrangisaikumar668@gmail.com
              </div>

              <div>
                <strong>Languages:</strong> English, Telugu
              </div>

              <div>
                <strong>Availability:</strong> Open to Opportunities
              </div>

            </div>

            <a
              href="/resume.pdf"
              className="btn mt-4"
              download
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;