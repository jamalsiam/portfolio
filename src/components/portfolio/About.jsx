import React from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { 
  Award, 
  GraduationCap, 
  Globe, 
  Clock, 
  Briefcase, 
  Layers, 
  Users, 
  Boxes, 
  Sparkles, 
  Check 
} from 'lucide-react';
import './About.css';

const getStatIcon = (index) => {
  switch (index) {
    case 0: return <Clock size={22} className="stat-icon" />;
    case 1: return <Briefcase size={22} className="stat-icon" />;
    case 2: return <Layers size={22} className="stat-icon" />;
    default: return <Clock size={22} className="stat-icon" />;
  }
};

const achievementMeta = [
  {
    icon: Layers,
    category: "Architecture & Monorepos",
    tag: "Enterprise Scale"
  },
  {
    icon: Users,
    category: "Engineering Leadership",
    tag: "Team Velocity"
  },
  {
    icon: Boxes,
    category: "Design System & Shared Libs",
    tag: "Modularity"
  },
  {
    icon: Sparkles,
    category: "AI Agents & Automation",
    tag: "Next-Gen DevX"
  }
];

const About = () => {
  return (
    <AnimatedSection id="about" className="about-section">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <SectionTitle title="About Me" subtitle="Professional summary and technical leadership narrative." />
            
            <div className="about-prose">
              <p>
                {profile.summary}
              </p>
            </div>

            {/* Architectural Philosophy Callout */}
            <div className="about-quote-card">
              <div className="quote-accent-bar" aria-hidden="true"></div>
              <div className="quote-content">
                <p className="quote-text">
                  "Enterprise front-end architecture is about turning distributed complexity into resilient, unified experiences—combining micro-frontends, offline reliability, and intelligent AI workflows to scale engineering velocity."
                </p>
                <div className="quote-author-row">
                  <span className="quote-author">Jamal Abu Siam</span>
                  <span className="quote-role">Lead Front-End Architect</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {profile.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  {getStatIcon(index)}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        {profile.achievements && profile.achievements.length > 0 && (
          <div className="about-achievements">
            <div className="achievements-heading-wrap">
              <h3 className="achievements-heading">
                <Award size={20} className="achievements-heading-icon" /> Key Achievements & Engineering Impact
              </h3>
              <span className="achievements-badge">Proven Production Outcomes</span>
            </div>
            <div className="achievements-grid">
              {profile.achievements.map((item, idx) => {
                const meta = achievementMeta[idx] || { icon: Award, category: "Engineering Impact", tag: "Enterprise" };
                const IconComponent = meta.icon;
                return (
                  <div key={idx} className="achievement-card">
                    <div className="achievement-card-top">
                      <div className="achievement-icon-wrapper">
                        <IconComponent size={20} className="achievement-icon" />
                      </div>
                      <div className="achievement-meta">
                        <span className="achievement-category">{meta.category}</span>
                        <span className="achievement-tag">{meta.tag}</span>
                      </div>
                      <div className="achievement-check-badge" title="Verified Achievement">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </div>
                    <p className="achievement-text">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Credentials: Education & Languages */}
        <div className="about-credentials-grid">
          <div className="credential-card education-card">
            <div className="credential-header">
              <div className="credential-icon-wrapper">
                <GraduationCap size={24} className="credential-icon" />
              </div>
              <div className="credential-header-text">
                <div className="credential-badges">
                  <span className="credential-pill-accent">B.Sc. Degree</span>
                  <span className="credential-pill-date">{profile.education.period}</span>
                </div>
                <h4 className="credential-title">{profile.education.degree}</h4>
                <p className="credential-subtitle">{profile.education.institution}</p>
              </div>
            </div>
            <div className="coursework-section">
              <span className="coursework-label">Core Coursework & Specializations:</span>
              <div className="coursework-tags">
                {profile.education.coursework.map((course, idx) => (
                  <span key={idx} className="course-tag">
                    <span className="course-tag-dot"></span>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="credential-card languages-card">
            <div className="credential-header">
              <div className="credential-icon-wrapper">
                <Globe size={24} className="credential-icon" />
              </div>
              <div className="credential-header-text">
                <div className="credential-badges">
                  <span className="credential-pill-accent">Global Reach</span>
                </div>
                <h4 className="credential-title">Languages & Communication</h4>
                <p className="credential-subtitle">Cross-border engineering collaboration</p>
              </div>
            </div>
            <div className="languages-list">
              {profile.languages.map((lang, idx) => {
                const isArabic = lang.name === 'Arabic';
                const percent = isArabic ? 100 : 92;
                return (
                  <div key={idx} className="language-item">
                    <div className="language-info">
                      <span className="language-name">{lang.name}</span>
                      <div className="language-badge-wrap">
                        <span className="language-level">{lang.proficiency}</span>
                        <span className="language-percent">{percent}%</span>
                      </div>
                    </div>
                    <div className="language-bar">
                      <div 
                        className="language-progress" 
                        style={{ width: `${percent}%` }}
                      >
                        <span className="language-progress-glow"></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default About;
