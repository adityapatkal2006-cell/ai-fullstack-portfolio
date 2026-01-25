import React from 'react';
import { skills } from '../data/portfolioData';
import { Code, Database, Brain, TrendingUp, BarChart3, BookOpen } from 'lucide-react';
import '../styles/Skills.css';

const iconMap = {
  'Programming & Tools': Code,
  'Data Science': Database,
  'Machine Learning & AI': Brain,
  'Analysis Methods': TrendingUp,
  'Visualization': BarChart3,
  'Domain Knowledge': BookOpen
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive toolkit for data-driven insights and AI solutions
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category];
            return (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="skill-category">{skillGroup.category}</h3>
                </div>
                <div className="skill-items">
                  {skillGroup.items.map((item, idx) => (
                    <div key={idx} className="skill-item">
                      <span className="skill-dot"></span>
                      <span className="skill-name">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;