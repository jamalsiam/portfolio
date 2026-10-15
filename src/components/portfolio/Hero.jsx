import React from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
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
  const { content, isRTL } = useLanguage();

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
            <span>{content.hero.statusPill}</span>
          </div>

          <h1 className="hero-title">
            {content.hero.titleLine1}{' '}
            <span className="text-gradient">{content.hero.titleLine2}</span>
          </h1>

          <p className="hero-subtitle">
            {content.hero.subtitle}
          </p>

          {/* Quick Tech Badges */}
          <div className="hero-tech-pills">
            {content.hero.techPills.map((tech) => (
              <span key={tech} className="tech-pill">
                <span className="tech-pill-dot"></span>
                {tech}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>{content.hero.viewProjects}</span>
              <ArrowRight size={18} className={isRTL ? 'rtl-flip' : ''} style={{ marginInlineStart: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              {content.hero.letsConnect}
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <TrendingUp size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">{content.hero.stats.yearsVal}</span>
                <span className="hero-stat-desc">{content.hero.stats.yearsDesc}</span>
              </div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <Building2 size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">{content.hero.stats.orgsVal}</span>
                <span className="hero-stat-desc">{content.hero.stats.orgsDesc}</span>
              </div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <div className="hero-stat-icon-wrap">
                <ShieldCheck size={16} />
              </div>
              <div className="hero-stat-text-wrap">
                <span className="hero-stat-num">{content.hero.stats.systemsVal}</span>
                <span className="hero-stat-desc">{content.hero.stats.systemsDesc}</span>
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
                <Terminal size={13} style={{ marginInlineEnd: '0.35rem' }} /> {content.hero.blueprint.filename}
              </span>
              <div className="blueprint-status-group">
                <span className="blueprint-branch">
                  <GitBranch size={11} style={{ marginInlineEnd: '0.25rem' }} /> {content.hero.blueprint.branch}
                </span>
                <span className="blueprint-status">
                  <span className="status-live-dot"></span> {content.hero.blueprint.liveMesh}
                </span>
              </div>
            </div>

            {/* Architecture Node Tree */}
            <div className="blueprint-body">
              <div className="node-tree">
                <div className="node root">
                  <span className="node-badge">{content.hero.blueprint.leadBadge}</span>
                  <span className="node-name">{content.hero.blueprint.name}</span>
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
                      <strong>{content.hero.blueprint.coreTitle}</strong>
                      <span className="core-status-pill">{content.hero.blueprint.coreActive}</span>
                    </div>
                    <span className="core-sub">{content.hero.blueprint.coreSub}</span>
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
                <Cpu size={12} /> {content.hero.blueprint.highPerf}
              </div>
              <div className="spec-tag">
                <Sparkles size={12} /> {content.hero.blueprint.modularUI}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
