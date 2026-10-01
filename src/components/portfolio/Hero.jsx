import React from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container className="hero-container">
        <div className="hero-content animate-slide-up">
          <p className="hero-greeting">Hi, I'm {profile.name}</p>
          <h1 className="hero-title">
            <span className="text-gradient">Senior Front-End</span> Architect & Lead
          </h1>
          <p className="hero-subtitle">
            Building scalable enterprise applications, modern frontend architectures, and high-performance user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={22} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} />
            </a>
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-300">
          {/* Conceptual Architecture Node Tree */}
          <div className="node-tree">
            <div className="node root">JAMAL</div>
            <div className="line vertical"></div>

            <div className="node-row split-3">
              <div className="line horizontal top"></div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">React</div>
                <div className="line vertical small"></div>
              </div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">Angular</div>
                <div className="line vertical small"></div>
              </div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">AI Agents</div>
                <div className="line vertical small"></div>
              </div>
              <div className="line horizontal bottom"></div>
            </div>

            <div className="line vertical"></div>
            <div className="node core">Enterprise<br />Systems</div>
            <div className="line vertical"></div>

            <div className="node-row split-3">
              <div className="line horizontal top-bottom"></div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">MFE</div>
              </div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">Monorepo</div>
              </div>
              <div className="node-col">
                <div className="line vertical small"></div>
                <div className="node leaf">APIs</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
