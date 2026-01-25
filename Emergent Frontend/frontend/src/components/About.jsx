import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Award, Target } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-badge">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <p className="about-description">{personalInfo.about}</p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <User size={24} />
                </div>
                <h3 className="highlight-title">Student at IIT Jodhpur</h3>
                <p className="highlight-description">
                  Pursuing {personalInfo.program} at the prestigious Indian Institute of Technology, Jodhpur
                </p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <Target size={24} />
                </div>
                <h3 className="highlight-title">Research Focus</h3>
                <p className="highlight-description">
                  Statistical deep-learning applied to health analytics, behavioral metrics, and data interpretation
                </p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <Award size={24} />
                </div>
                <h3 className="highlight-title">Specialization</h3>
                <p className="highlight-description">
                  Data visualization, correlation analysis, and transforming complex data into actionable insights
                </p>
              </div>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3 className="info-title">Education</h3>
              <div className="info-item">
                <div className="info-label">Institution</div>
                <div className="info-value">{personalInfo.institution}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Program</div>
                <div className="info-value">{personalInfo.program}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Field</div>
                <div className="info-value">Artificial Intelligence & Data Science</div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Research Interests</h3>
              <ul className="interests-list">
                <li>Statistical Deep Learning</li>
                <li>Health Data Analytics</li>
                <li>Behavioral Metrics Analysis</li>
                <li>Data Visualization</li>
                <li>Correlation Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;