import React from 'react';
import { profile } from '../../data/profile';
import Container from './Container';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
          </div>
          
          <div className="footer-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer">
              <Mail size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
