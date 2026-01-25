import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-badge">My Work</span>
          <h2 className="section-title">Research & Projects</h2>
          <p className="section-description">
            Exploring the intersection of AI, data science, and real-world applications
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-details">
                <div className="project-institution">
                  <span className="detail-label">Institution</span>
                  <span className="detail-value">{project.institution}</span>
                </div>
                <div className="project-date">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{project.date}</span>
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <button 
                className="expand-btn"
                onClick={() => toggleProject(project.id)}
              >
                {expandedProject === project.id ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    <span>View Details</span>
                    <ChevronDown size={20} />
                  </>
                )}
              </button>

              {expandedProject === project.id && (
                <div className="project-expanded">
                  <div className="expanded-section">
                    <h4 className="expanded-title">Project Overview</h4>
                    <p className="expanded-text">{project.longDescription}</p>
                  </div>

                  <div className="expanded-section">
                    <h4 className="expanded-title">Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="expanded-section">
                    <h4 className="expanded-title">Research Insights</h4>
                    <ul className="insights-list">
                      {project.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;