import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
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

const achievementIcons = [Layers, Users, Boxes, Sparkles];

const About = () => {
  const { content } = useLanguage();

  return (
    <AnimatedSection id="about" className="about-section">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <SectionTitle 
              title={content.about.title} 
              subtitle={content.about.subtitle} 
            />
            
            <div className="about-prose">
              <p>
                {content.about.summary}
              </p>
            </div>

            {/* Architectural Philosophy Callout */}
            <div className="about-quote-card">
              <div className="quote-accent-bar" aria-hidden="true"></div>
              <div className="quote-content">
                <p className="quote-text">
                  {content.about.quote}
                </p>
                <div className="quote-author-row">
                  <span className="quote-author">{content.name}</span>
                  <span className="quote-role">{content.about.quoteRole}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {content.about.stats.map((stat, index) => (
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
        {content.about.achievements && content.about.achievements.length > 0 && (
          <div className="about-achievements">
            <div className="achievements-heading-wrap">
              <h3 className="achievements-heading">
                <Award size={20} className="achievements-heading-icon" /> {content.about.achievementsHeading}
              </h3>
              <span className="achievements-badge">{content.about.achievementsBadge}</span>
            </div>
            <div className="achievements-grid">
              {content.about.achievements.map((item, idx) => {
                const IconComponent = achievementIcons[idx % achievementIcons.length] || Award;
                return (
                  <div key={idx} className="achievement-card">
                    <div className="achievement-card-top">
                      <div className="achievement-icon-wrapper">
                        <IconComponent size={20} className="achievement-icon" />
                      </div>
                      <div className="achievement-meta">
                        <span className="achievement-category">{item.category}</span>
                        <span className="achievement-tag">{item.tag}</span>
                      </div>
                      <div className="achievement-check-badge" title="Verified Achievement">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </div>
                    <p className="achievement-text">{item.text}</p>
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
                  <span className="credential-pill-accent">{content.about.education.badge}</span>
                  <span className="credential-pill-date">{content.about.education.period}</span>
                </div>
                <h4 className="credential-title">{content.about.education.degree}</h4>
                <p className="credential-subtitle">{content.about.education.institution}</p>
              </div>
            </div>
            <div className="coursework-section">
              <span className="coursework-label">{content.about.education.courseworkLabel}</span>
              <div className="coursework-tags">
                {content.about.education.coursework.map((course, idx) => (
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
                  <span className="credential-pill-accent">{content.about.languages.badge}</span>
                </div>
                <h4 className="credential-title">{content.about.languages.title}</h4>
                <p className="credential-subtitle">{content.about.languages.subtitle}</p>
              </div>
            </div>
            <div className="languages-list">
              {content.about.languages.items.map((lang, idx) => (
                <div key={idx} className="language-item">
                  <div className="language-info">
                    <span className="language-name">{lang.name}</span>
                    <div className="language-badge-wrap">
                      <span className="language-level">{lang.proficiency}</span>
                      <span className="language-percent">{lang.percent}%</span>
                    </div>
                  </div>
                  <div className="language-bar">
                    <div 
                      className="language-progress" 
                      style={{ width: `${lang.percent}%` }}
                    >
                      <span className="language-progress-glow"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default About;
