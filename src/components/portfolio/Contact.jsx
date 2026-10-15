import React, { useState } from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { ArrowRight, Mail, Phone, Copy, Check, MapPin, Clock, Send } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Contact.css';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { content, isRTL } = useLanguage();

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
              title={content.contact.title} 
              subtitle={content.contact.subtitle} 
            />
            
            <p className="contact-description">
              {content.contact.description}
            </p>
            
            {/* Direct Contact Items with 1-Click Copy */}
            <div className="contact-methods">
              <div className="contact-method-card">
                <a href={`mailto:${profile.email}`} className="contact-method-item">
                  <div className="contact-method-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">{content.contact.emailLabel}</span>
                    <span className="contact-method-value" dir="ltr">{profile.email}</span>
                  </div>
                </a>
                <button 
                  type="button" 
                  className="contact-copy-btn" 
                  onClick={handleCopyEmail}
                  title={copiedEmail ? content.contact.copied : content.contact.copy}
                  aria-label={content.contact.copy}
                >
                  {copiedEmail ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                  <span className="copy-label">{copiedEmail ? content.contact.copied : content.contact.copy}</span>
                </button>
              </div>
              
              <div className="contact-method-card">
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact-method-item">
                  <div className="contact-method-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">{content.contact.phoneLabel}</span>
                    <span className="contact-method-value" dir="ltr">{profile.phone}</span>
                  </div>
                </a>
                <button 
                  type="button" 
                  className="contact-copy-btn" 
                  onClick={handleCopyPhone}
                  title={copiedPhone ? content.contact.copied : content.contact.copy}
                  aria-label={content.contact.copy}
                >
                  {copiedPhone ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                  <span className="copy-label">{copiedPhone ? content.contact.copied : content.contact.copy}</span>
                </button>
              </div>
            </div>

            {/* Location & Global Collaboration Badge */}
            <div className="contact-meta-badge">
              <div className="meta-badge-item">
                <MapPin size={15} className="meta-icon" />
                <span>{content.contact.locationBadge}</span>
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
                <span className="status-dot"></span> {isRTL ? 'متاح للانضمام والمشاريع' : 'Available for Hire'}
              </span>
              <h3>{content.contact.actionsCardTitle}</h3>
              <p>{content.contact.actionsCardSubtitle}</p>
            </div>
            
            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="btn btn-primary btn-block">
                <Send size={18} style={{ marginInlineEnd: '0.5rem' }} /> {content.contact.emailBtn}
              </a>
              
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Linkedin size={18} style={{ marginInlineEnd: '0.5rem' }} /> {content.contact.linkedInBtn} 
                <ArrowRight size={16} className={isRTL ? 'rtl-flip' : ''} style={{ marginInlineStart: 'auto' }} />
              </a>
              
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                <Github size={18} style={{ marginInlineEnd: '0.5rem' }} /> {content.contact.githubBtn} 
                <ArrowRight size={16} className={isRTL ? 'rtl-flip' : ''} style={{ marginInlineStart: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Contact;
