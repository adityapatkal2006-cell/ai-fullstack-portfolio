import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles, Github, Linkedin, Instagram, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="animated-background">
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile-section">
            <div className="profile-image-wrapper spacer-only"></div>
            
            <div className="hero-text-content">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>IIT Jodhpur</span>
              </div>
              
              <h1 className="hero-title">
                Hi, It's <span className="accent-text">Adityaraje</span>
              </h1>
              
              <p className="hero-subtitle">
                I'm student of D.S and co-piloted by AI
              </p>
              
              <p className="hero-description">
                {personalInfo.tagline}
              </p>

              {/* SOCIAL LINKS - UPDATED TO X LOGO */}
              <div className="hero-social-links">
                <a 
                  href="https://linkedin.com/in/adityaraje-patkal-b04a34380" 
                  className="social-icon-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/adityapatkal2006-cell" 
                  className="social-icon-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://x.com/Adityaraje_2006" 
                  className="social-icon-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <X size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/adityaraje_2006/" 
                  className="social-icon-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
              </div>
              
              <div className="hero-actions">
                <button className="btn-primary" onClick={scrollToContact}>
                  Get in Touch
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary" onClick={scrollToProjects}>
                  View Projects
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">IIT Jodhpur</div>
                  <div className="stat-label">Institution</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">Applied AI & DS</div>
                  <div className="stat-label">Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;