import React from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Contact.css';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="contact-section">
      <Container>
        <div className="contact-container">
          <div className="contact-text">
            <SectionTitle 
              title="Let's build something meaningful." 
              subtitle="Currently open to new opportunities, technical discussions, and architectural consulting." 
            />
            
            <p className="contact-description">
              Whether you need to architect a complex enterprise platform, scale a frontend team, or just want to discuss modern web technologies, my inbox is always open.
            </p>
            
            <div className="contact-methods">
              <a href={`mailto:${profile.email}`} className="contact-method-item">
                <div className="contact-method-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">{profile.email}</span>
                </div>
              </a>
              
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact-method-item">
                <div className="contact-method-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Phone</span>
                  <span className="contact-method-value">{profile.phone}</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-actions-card">
            <h3>Connect with me</h3>
            <p>I'm active on LinkedIn and frequently share code on GitHub.</p>
            
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="btn btn-primary btn-block">
                Email Me <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </a>
              
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Linkedin size={20} style={{ marginRight: '0.5rem' }} /> LinkedIn
              </a>
              
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Github size={20} style={{ marginRight: '0.5rem' }} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Contact;
