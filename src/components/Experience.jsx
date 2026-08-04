import React from "react";
import "../assets/css/Experience.css";

import {
  FaBriefcase,
  FaCloud,
  FaDocker,
  FaCodeBranch,
  FaTools
} from "react-icons/fa";

function Experience() {

  return (

    <section className="experience" id="experience">

      <div className="container">

        <div className="section-title">

          <h2>Professional Experience</h2>

          <p>
            My professional journey in Azure Cloud,
            DevOps, Automation, Infrastructure as Code,
            and Cloud Platform Engineering.
          </p>

        </div>

        <div className="timeline">

          {/* Current Experience */}

          <div className="timeline-item">

            <div className="timeline-icon">

              <FaCloud />

            </div>

            <div className="timeline-content">

              <span className="timeline-date">

                Aug 2025 - Present

              </span>

              <h3>

                Azure DevOps Engineer

              </h3>

              <h4>

                Cloud & DevOps

              </h4>

              <ul>

                <li>
                  Designed and maintained Azure DevOps YAML CI/CD pipelines.
                </li>

                <li>
                  Automated infrastructure using Terraform and Bicep.
                </li>

                <li>
                  Managed Azure App Services, Storage Accounts, Azure SQL,
                  Azure Container Registry and Azure Key Vault.
                </li>

                <li>
                  Built Docker images and deployed workloads into AKS.
                </li>

                <li>
                  Implemented Blue-Green and Canary deployments.
                </li>

                <li>
                  Integrated SonarQube, Trivy and security scanning.
                </li>

                <li>
                  Configured Azure Monitor,
                  Application Insights,
                  Log Analytics and KQL dashboards.
                </li>

                <li>
                  Managed Microsoft Entra ID,
                  RBAC and Managed Identity.
                </li>

              </ul>

            </div>

          </div>

          {/* Previous Experience */}

          <div className="timeline-item">

            <div className="timeline-icon">

              <FaBriefcase />

            </div>

            <div className="timeline-content">

              <span className="timeline-date">

                Jan 2024 - May 2025

              </span>

              <h3>

                Associate Engineer

              </h3>

              <h4>

                Auropro Soft Systems

              </h4>

              <ul>

                <li>
                  Designed, deployed, monitored and managed Azure resources.
                </li>

                <li>
                  Supported Azure Virtual Machines,
                  Virtual Networks,
                  NSGs and Storage Accounts.
                </li>

                <li>
                  Worked with Azure DevOps Repos,
                  Pipelines and Release Management.
                </li>

                <li>
                  Automated Azure infrastructure
                  using Terraform.
                </li>

                <li>
                  Managed Microsoft Entra ID,
                  RBAC and IAM permissions.
                </li>

                <li>
                  Created KQL queries for Azure Monitor.
                </li>

                <li>
                  Supported production deployments
                  and incident troubleshooting.
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Highlights */}

        <div className="experience-highlights">

          <div className="highlight-card">

            <FaDocker />

            <h3>

              Docker & Kubernetes

            </h3>

            <p>

              Containerized enterprise applications
              using Docker, AKS,
              Helm and ArgoCD.

            </p>

          </div>

          <div className="highlight-card">

            <FaCodeBranch />

            <h3>

              CI/CD Automation

            </h3>

            <p>

              Automated deployments
              using Azure DevOps,
              GitHub Actions
              and YAML Pipelines.

            </p>

          </div>

          <div className="highlight-card">

            <FaTools />

            <h3>

              Infrastructure as Code

            </h3>

            <p>

              Provisioned Azure resources
              using Terraform,
              ARM Templates
              and Bicep.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Experience;