import React from "react";
import "../assets/css/Skills.css";

import {
  FaMicrosoft,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiHelm,
  SiJenkins,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  {
    title: "Microsoft Azure",
    icon: <FaMicrosoft />,
    level: 75,
  },
  {
    title: "Azure DevOps",
    icon: <FaMicrosoft />,
    level: 95,
  },
  {
    title: "Terraform",
    icon: <SiTerraform />,
    level: 90,
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    level: 92,
  },
  {
    title: "Kubernetes (AKS)",
    icon: <SiKubernetes />,
    level: 90,
  },
  {
    title: "Helm",
    icon: <SiHelm />,
    level: 85,
  },
  {
    title: "GitHub Actions",
    icon: <SiGithubactions />,
    level: 90,
  },
  {
    title: "Jenkins",
    icon: <SiJenkins />,
    level: 45,
  },
  {
    title: "Ansible",
    icon: <SiAnsible />,
    level: 50,
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    level: 95,
  },
  {
    title: "Linux",
    icon: <FaLinux />,
    level: 90,
  },
  {
    title: "Python",
    icon: <FaPython />,
    level: 82,
  },
  {
    title: "Prometheus",
    icon: <SiPrometheus />,
    level: 82,
  },
  {
    title: "Grafana",
    icon: <SiGrafana />,
    level: 82,
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>

          <p>
            Technologies and tools that I use to build scalable cloud
            infrastructure, CI/CD pipelines, Kubernetes platforms, and Azure
            cloud solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>

                <h3>{skill.title}</h3>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>
              </div>

              <p>{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;