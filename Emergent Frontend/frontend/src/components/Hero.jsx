import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

// Official Branded X Logo SVG
const XLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z"/>
  </svg>
);

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
                I'm student of A.I and D.S
              </p>
              
              <p className="hero-description">
                {personalInfo.tagline}
              </p>

              <div className="hero-social-links">
                <a href="https://linkedin.com/in/adityaraje-patkal-b04a34380" className="social-icon-btn" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/adityapatkal2006-cell" className="social-icon-btn" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://x.com/Adityaraje_2006" className="social-icon-btn" target="_blank" rel="noopener noreferrer">
                  <XLogo size={18} />
                </a>
                <a href="https://www.instagram.com/adityaraje_2006/" className="social-icon-btn" target="_blank" rel="noopener noreferrer">
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