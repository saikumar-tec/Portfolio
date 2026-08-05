import React from "react";
import "../assets/css/Hero.css";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/images/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaDocker,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-left">

          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1>Saikumar</h1>

          <h2>Azure DevOps Engineer</h2>

          <p className="hero-description">
            Azure DevOps Engineer with experience in Azure,
            Docker, Kubernetes, AKS, Terraform,
            Azure DevOps Pipelines, GitHub Actions,
            CI/CD, Infrastructure as Code,
            Monitoring, Cloud Automation,
            and Platform Engineering.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="btn">
              Contact Me <FaArrowRight />
            </a>

            <a
              href={resume}
              download
              className="btn-outline"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/saikumar-tec/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saikumar-kotrangi-8a366b267/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:kotrangisaikumar668@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Content */}
        <div className="hero-right">

          <div className="profile-card">

            <img
              src={profile}
              alt="Saikumar"
              className="profile-image"
            />

          </div>

        </div>

      </div>

      {/* Technology Cards */}
      <div className="container">

        <div className="tech-grid">

          <div className="tech-card">
            <FaMicrosoft />
            <h3>Azure</h3>
            <p>
              Azure App Services,
              Azure Monitor,
              Azure Networking,
              Azure DevOps
            </p>
          </div>

          <div className="tech-card">
            <FaDocker />
            <h3>Docker</h3>
            <p>
              Docker Images,
              Docker Compose,
              Azure Container Registry
            </p>
          </div>

          <div className="tech-card">
            <SiKubernetes />
            <h3>Kubernetes</h3>
            <p>
              AKS,
              Helm,
              ArgoCD,
              Ingress,
              Services
            </p>
          </div>

          <div className="tech-card">
            <SiTerraform />
            <h3>Terraform</h3>
            <p>
              Infrastructure as Code,
              Azure Resources,
              Modules,
              Automation
            </p>
          </div>

          <div className="tech-card">
            <FaMicrosoft />
            <h3>Azure DevOps</h3>
            <p>
              Pipelines,
              Repos,
              Boards,
              Releases,
              CI/CD
            </p>
          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="container">

        <div className="stats">

          <div className="stat">
            <h2>2.4+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h2>20+</h2>
            <p>Azure Projects</p>
          </div>

          <div className="stat">
            <h2>40+</h2>
            <p>CI/CD Pipelines</p>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <p>Passion for Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;