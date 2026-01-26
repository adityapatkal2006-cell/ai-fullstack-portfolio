import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      {/* Background with Resend-style grid */}
      <div className="animated-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile-section">
            <div className="profile-image-wrapper">
              <img src="/profile-photo.jpg" alt="Profile" className="profile-image" />
              <div className="profile-border"></div>
            </div>
            
            <div className="hero-text-content">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>{personalInfo.institution}</span>
              </div>
              
              <h1 className="hero-title">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}<br />
                <span className="accent-text">{personalInfo.name.split(' ').slice(2).join(' ')}</span>
              </h1>
              
              <p className="hero-subtitle">{personalInfo.title}</p>
              <p className="hero-description">{personalInfo.tagline}</p>
              
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
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">Deep Learning</div>
                  <div className="stat-label">Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Animation Section */}
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