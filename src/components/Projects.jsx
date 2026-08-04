import React from "react";
import "../assets/css/Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaReact,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Enterprise 3-Tier Hospital Management System built using React, Flask, PostgreSQL, Docker, NGINX and Azure DevOps CI/CD.",

    technologies: [
      "React",
      "Python Flask",
      "PostgreSQL",
      "Docker",
      "NGINX",
    ],

    icon: <FaReact />,
    github: "#",
    demo: "#",
  },

  {
    title: "Azure DevOps CI/CD Pipeline",

    description:
      "Designed multi-stage Azure DevOps YAML pipelines with build, test, SonarQube, Trivy scanning and automated Azure deployments.",

    technologies: [
      "Azure DevOps",
      "YAML",
      "Docker",
      "Azure Web Apps",
    ],

    // Use Microsoft icon because SiAzuredevops does not exist
    icon: <FaMicrosoft />,
    github: "#",
    demo: "#",
  },

  {
    title: "AKS GitOps Platform",

    description:
      "Built GitOps deployment platform using AKS, Helm, Argo CD and Azure Container Registry.",

    technologies: [
      "AKS",
      "Helm",
      "Argo CD",
      "ACR",
    ],

    icon: <SiKubernetes />,
    github: "#",
    demo: "#",
  },

  {
    title: "Terraform Infrastructure",

    description:
      "Provisioned Azure infrastructure using Terraform modules for Resource Groups, VNets, AKS, Storage Accounts and Key Vault.",

    technologies: [
      "Terraform",
      "Azure",
      "Bicep",
    ],

    icon: <SiTerraform />,
    github: "#",
    demo: "#",
  },

  {
    title: "Monitoring Platform",

    description:
      "Implemented monitoring using Azure Monitor, Prometheus and Grafana.",

    technologies: [
      "Prometheus",
      "Grafana",
      "Azure Monitor",
    ],

    icon: <SiGrafana />,
    github: "#",
    demo: "#",
  },

  {
    title: "Dockerized Applications",

    description:
      "Containerized React and Python applications using Docker and Azure Container Registry.",

    technologies: [
      "Docker",
      "React",
      "Python",
      "Azure",
    ],

    icon: <FaDocker />,
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>

          <p>
            Some of my best DevOps, Azure Cloud and Full Stack projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;