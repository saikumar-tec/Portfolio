import React from "react";
import "../assets/css/Resume.css";

import {
  FaDownload,
  FaEye,
  FaPrint,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Resume() {

  const printResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (

    <section className="resume" id="resume">

      <div className="container">

        <div className="section-title">

          <h2>Resume</h2>

          <p>
            View, download or print my latest Azure DevOps Resume.
          </p>

        </div>

        <div className="resume-card">

          <div className="resume-left">

            <h3>Azure DevOps Engineer</h3>

            <p>

              This resume includes my professional experience,
              Azure projects, Terraform, Kubernetes,
              Docker, Azure DevOps, CI/CD,
              Monitoring and Cloud Automation skills.

            </p>

            <div className="resume-buttons">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >

                <FaEye />

                View Resume

              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >

                <FaDownload />

                Download Resume

              </a>

              <button
                className="btn-print"
                onClick={printResume}
              >

                <FaPrint />

                Print Resume

              </button>

            </div>

            <div className="resume-social">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub />

                GitHub

              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin />

                LinkedIn

              </a>

            </div>

          </div>

          <div className="resume-right">

            <iframe
              src="/resume.pdf"
              title="Resume"
            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default Resume;