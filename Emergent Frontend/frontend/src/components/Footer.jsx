import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">ADITYA</span>
              <span className="logo-accent">RAJE</span>
            </div>
            <p className="footer-tagline">{personalInfo.tagline}</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-list">
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Education</h3>
              <ul className="footer-list">
                <li>{personalInfo.institution}</li>
                <li>{personalInfo.program}</li>
                <li>AI & Data Science</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Connect</h3>
              <ul className="footer-list">
                <li>
                  <a href={`mailto:${personalInfo.email}`}>Email</a>
                </li>
                <li>IIT Jodhpur</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ').slice(-1)[0]}. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;