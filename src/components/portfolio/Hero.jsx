import React from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  GitBranch 
} from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <Container className="hero-container">
        <div className="hero-content animate-slide-up">
          {/* Availability Status Badge */}
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-ping"></span>
              <span className="status-dot"></span>
            </span>
            <span>Front-End Lead & Enterprise Systems Architect</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="text-gradient">Enterprise Platforms</span>,<br className="hero-title-break" />
            <span className="hero-title-nowrap">Micro-Frontends</span> & Scalable UI
          </h1>

          <p className="hero-subtitle">
            Senior Front-End Developer & Team Lead with 7+ years architecting Executive Action Control Centers, Government Correspondence platforms, and Monorepo architectures with React, Angular Signals, and AI Agents.
          </p>

          {/* Quick Tech Badges */}
          <div className="hero-tech-pills">
            <span className="tech-pill"><span className="tech-pill-dot"></span>React 19 & Native</span>
            <span className="tech-pill"><span className="tech-pill-dot"></span>Angular & Signals</span>
            <span className="tech-pill"><span className="tech-pill-dot"></span>Micro-Frontends</span>
            <span className="tech-pill"><span className="tech-pill-dot"></span>NodeJS / NestJS</span>
            <span className="tech-pill"><span className="tech-pill-dot"></span>AI Agents</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Flagship Projects <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <TrendingUp size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">7+</span>
                <span className="hero-stat-desc">Years Exp.</span>
              </div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <Building2 size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">4</span>
                <span className="hero-stat-desc">Orgs Led</span>
              </div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <ShieldCheck size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">Enterprise</span>
                <span className="hero-stat-desc">Tier Systems</span>
              </div>
            </div>
          </div>

          <div className="hero-socials">
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Send email">
              <Mail size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Elevated Architecture Blueprint Visual */}
        <div className="hero-visual animate-fade-in delay-200">
          <div className="blueprint-card">
            {/* Window Titlebar */}
            <div className="blueprint-titlebar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="blueprint-filename">
                <Terminal size={13} style={{ marginRight: '0.35rem' }} /> architecture-spec.ts
              </span>
              <div className="blueprint-status-group">
                <span className="blueprint-branch">
                  <GitBranch size={11} style={{ marginRight: '0.25rem' }} /> main
                </span>
                <span className="blueprint-status">
                  <span className="status-live-dot"></span> Live Mesh
                </span>
              </div>
            </div>

            {/* Architecture Node Tree */}
            <div className="blueprint-body">
              <div className="node-tree">
                <div className="node root">
                  <span className="node-badge">Lead Architect & Team Lead</span>
                  <span className="node-name">Jamal Abu Siam</span>
                </div>
                <div className="line vertical pulse"></div>

                <div className="node-row split-3">
                  <div className="line horizontal top pulse"></div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf tech-react">
                      <span className="tech-dot react-dot"></span>
                      React & Native
                    </div>
                    <div className="line vertical small pulse"></div>
                  </div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf tech-angular">
                      <span className="tech-dot angular-dot"></span>
                      Angular Signals
                    </div>
                    <div className="line vertical small pulse"></div>
                  </div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf tech-ai">
                      <span className="tech-dot ai-dot"></span>
                      AI Agents
                    </div>
                    <div className="line vertical small pulse"></div>
                  </div>
                  <div className="line horizontal bottom pulse"></div>
                </div>

                <div className="line vertical pulse"></div>
                <div className="node core">
                  <div className="core-icon-wrap">
                    <Layers size={18} className="core-icon" />
                  </div>
                  <div className="core-text-wrap">
                    <div className="core-title-row">
                      <strong>Enterprise Platforms</strong>
                      <span className="core-status-pill">Active</span>
                    </div>
                    <span className="core-sub">MApp · Gov Correspondence · EPM</span>
                  </div>
                </div>
                <div className="line vertical pulse"></div>

                <div className="node-row split-3">
                  <div className="line horizontal top-bottom pulse"></div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf pattern-node">Micro-Frontends</div>
                  </div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf pattern-node">Nx Monorepos</div>
                  </div>
                  <div className="node-col">
                    <div className="line vertical small pulse"></div>
                    <div className="node leaf pattern-node">Offline Sync & APIs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Summary */}
            <div className="blueprint-footer">
              <div className="spec-tag">
                <Cpu size={12} /> High Performance
              </div>
              <div className="spec-tag">
                <Sparkles size={12} /> Modular UI Architecture
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
