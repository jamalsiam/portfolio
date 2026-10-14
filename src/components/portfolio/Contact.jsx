import React, { useState } from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { ArrowRight, Mail, Phone, Copy, Check, MapPin, Clock, Send } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Contact.css';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <AnimatedSection id="contact" className="contact-section">
      <Container>
        <div className="contact-container">
          <div className="contact-text">
            <SectionTitle 
              title="Let's build something meaningful." 
              subtitle="Currently open to new opportunities, engineering leadership, and architectural consulting." 
            />
            
            <p className="contact-description">
              Whether you need to architect a complex enterprise platform, scale a high-velocity frontend team, or discuss modern web systems (Micro-Frontends, Angular Signals, React, AI Agents), my inbox is always open.
            </p>
            
            {/* Direct Contact Items with 1-Click Copy */}
            <div className="contact-methods">
              <div className="contact-method-card">
                <a href={`mailto:${profile.email}`} className="contact-method-item">
                  <div className="contact-method-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">Email Address</span>
                    <span className="contact-method-value">{profile.email}</span>
                  </div>
                </a>
                <button 
                  type="button" 
                  className="contact-copy-btn" 
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                  <span className="copy-label">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              
              <div className="contact-method-card">
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact-method-item">
                  <div className="contact-method-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">Direct Phone</span>
                    <span className="contact-method-value">{profile.phone}</span>
                  </div>
                </a>
                <button 
                  type="button" 
                  className="contact-copy-btn" 
                  onClick={handleCopyPhone}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                  <span className="copy-label">{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location & Global Collaboration Badge */}
            <div className="contact-meta-badge">
              <div className="meta-badge-item">
                <MapPin size={15} className="meta-icon" />
                <span>{profile.location}</span>
              </div>
              <div className="meta-badge-divider"></div>
              <div className="meta-badge-item">
                <Clock size={15} className="meta-icon" />
                <span>UTC+3 (Arabia Standard Time)</span>
              </div>
            </div>
          </div>
          
          {/* Action Card */}
          <div className="contact-actions-card">
            <div className="actions-card-header">
              <span className="action-status-pill">
                <span className="status-dot"></span> Available for Hire
              </span>
              <h3>Connect with me</h3>
              <p>I'm active on LinkedIn, responsive via Email, and regularly publish enterprise engineering work on GitHub.</p>
            </div>
            
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="btn btn-primary btn-block">
                <Send size={18} style={{ marginRight: '0.5rem' }} /> Email Jamal Directly
              </a>
              
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Linkedin size={18} style={{ marginRight: '0.5rem' }} /> Connect on LinkedIn <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
              </a>
              
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Github size={18} style={{ marginRight: '0.5rem' }} /> Follow on GitHub <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Contact;
