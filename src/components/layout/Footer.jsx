import React from 'react';
import { profile } from '../../data/profile';
import { useTheme } from '../../hooks/useTheme';
import Container from './Container';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const { mode, currentAccent } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-emblem">JS</span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
              </div>
            </div>
            <p className="footer-tagline">
              Architecting high-concurrency enterprise web platforms, micro-frontends, and intelligent automation systems.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-connect">
            <span className="footer-col-title">Connect</span>
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
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {CURRENT_YEAR} {profile.name}. All rights reserved.</p>
          <div className="footer-theme-indicator">
            <span 
              className="theme-indicator-dot" 
              style={{ backgroundColor: currentAccent.previewColor }}
            ></span>
            <span>{mode === 'dark' ? 'Dark Mode' : 'Light Mode'} · {currentAccent.name}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
