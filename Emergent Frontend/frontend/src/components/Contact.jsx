import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h3 className="info-heading">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="info-link">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <User size={24} />
              </div>
              <div className="info-text">
                <h3 className="info-heading">Institution</h3>
                <p className="info-value">{personalInfo.institution}</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <MessageSquare size={24} />
              </div>
              <div className="info-text">
                <h3 className="info-heading">Program</h3>
                <p className="info-value">{personalInfo.program}</p>
              </div>
            </div>

            <div className="contact-cta">
              <h3 className="cta-heading">Let's Connect</h3>
              <p className="cta-text">
                I'm always interested in discussing AI, data science projects, 
                research opportunities, or collaborations.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn-primary form-submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </button>

            {formStatus === 'success' && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;