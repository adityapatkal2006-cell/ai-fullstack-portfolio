import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`dark-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">ADITYA</span>
          <span className="logo-accent">RAJE</span>
        </div>

        <nav className="dark-nav desktop-nav">
          <a onClick={() => scrollToSection('about')} className="dark-nav-link">About</a>
          <a onClick={() => scrollToSection('projects')} className="dark-nav-link">Projects</a>
          <a onClick={() => scrollToSection('skills')} className="dark-nav-link">Skills</a>
          <a onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</a>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <a onClick={() => scrollToSection('about')} className="dark-nav-link">About</a>
          <a onClick={() => scrollToSection('projects')} className="dark-nav-link">Projects</a>
          <a onClick={() => scrollToSection('skills')} className="dark-nav-link">Skills</a>
          <a onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;