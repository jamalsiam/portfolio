import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, CheckCircle } from 'lucide-react';
import './Experience.css';

const ROLE_TECH_MAP = {
  'esense-lead': ['Angular Signals', 'React 19', 'NestJS / ExpressJS', 'Micro-Frontends', 'AI Agents', 'Azure'],
  'esense-senior': ['Micro-Frontends', 'Monorepos', 'Angular', 'React', 'OAuth 2.0 / OIDC', 'Git'],
  'katib': ['React Native', 'Angular', 'RxJS', 'Redux', 'SCSS', 'OOP'],
  'smartway': ['Angular Framework', 'Bootstrap', 'HTML5', 'SCSS', 'Moodle']
};

const ExperienceCard = ({ exp, defaultOpen = false, isCurrent = false, currentBadge = 'Current Role' }) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  const isOverlap = Boolean(exp.overlapWith);
  const techList = ROLE_TECH_MAP[exp.id] || [];

  return (
    <div className={`timeline-item ${isOverlap ? 'overlap' : ''} ${isCurrent ? 'is-current' : ''}`}>
      <div className="timeline-marker">
        <div className={`timeline-dot ${isCurrent ? 'active-dot' : ''}`}>
          <Briefcase size={16} />
        </div>
        <div className="timeline-line"></div>
      </div>

      <div className="timeline-content">
        <div
          className={`experience-card ${isExpanded ? 'card-expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsExpanded(!isExpanded); } }}
        >
          <div className="experience-header">
            <div className="experience-header-main">
              <div className="experience-role-row">
                <h3 className="experience-role">{exp.role}</h3>
                {isCurrent && (
                  <span className="current-role-badge">
                    <span className="current-dot"></span> {currentBadge}
                  </span>
                )}
              </div>

              <div className="experience-meta">
                <span className="meta-item company">
                  {exp.company}
                </span>
                <span className="meta-item">
                  <MapPin size={14} /> {exp.location}
                </span>
                <span className="meta-item date">
                  <Calendar size={14} /> {exp.period}
                </span>
              </div>

              {/* Quick Tech Tags */}
              <div className="experience-tech-tags">
                {techList.map((tech, idx) => (
                  <span key={idx} className="exp-tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <button className="expand-btn" aria-label="Toggle details">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <div className={`experience-body ${isExpanded ? 'expanded' : ''}`}>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>
                  <CheckCircle size={15} className="resp-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { content } = useLanguage();

  return (
    <AnimatedSection id="experience" className="experience-section">
      <Container>
        <SectionTitle
          title={content.experience.title}
          subtitle={content.experience.subtitle}
        />

        <div className="timeline-container">
          {content.experience.items.map((exp, index) => (
            <ExperienceCard 
              key={exp.id || index} 
              exp={exp} 
              defaultOpen={index === 0}
              isCurrent={index === 0}
              currentBadge={content.experience.currentBadge}
            />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Experience;
