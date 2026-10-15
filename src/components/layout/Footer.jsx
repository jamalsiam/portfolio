import React from 'react';
import { profile } from '../../data/profile';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import Container from './Container';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const { mode, currentAccent } = useTheme();
  const { content } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: content.nav.about, href: '#about' },
    { name: content.nav.experience, href: '#experience' },
    { name: content.nav.projects, href: '#projects' },
    { name: content.nav.architecture, href: '#architecture' },
    { name: content.nav.skills, href: '#skills' },
    { name: content.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-emblem">JS</span>
              <div>
                <h3>{content.name}</h3>
                <p>{content.role}</p>
              </div>
            </div>
            <p className="footer-tagline">
              {content.footer.tagline}
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-col-title">{content.footer.navTitle}</span>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-connect">
            <span className="footer-col-title">{content.footer.connectTitle}</span>
            <div className="footer-socials">
              <a href={`mailto:${profile.email}`} aria-label="Email" title="Send email">
                <Mail size={18} />
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github size={18} />
              </a>
            </div>

            <button 
              type="button" 
              className="back-to-top-btn" 
              onClick={scrollToTop}
              aria-label={content.footer.backToTop}
            >
              <span>{content.footer.backToTop}</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {CURRENT_YEAR} {content.name}. {content.footer.rights}</p>
          <div className="footer-theme-indicator">
            <span 
              className="theme-indicator-dot" 
              style={{ backgroundColor: currentAccent.previewColor }}
            ></span>
            <span>{mode === 'dark' ? content.theme.dark : content.theme.light} · {currentAccent.name}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
