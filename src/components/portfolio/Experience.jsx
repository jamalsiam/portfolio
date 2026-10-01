import React, { useState } from 'react';
import { experience } from '../../data/experience';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import './Experience.css';

const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOverlap = exp.overlapWith;

  return (
    <div className={`timeline-item ${isOverlap ? 'overlap' : ''}`}>
      <div className="timeline-marker">
        <div className="timeline-dot">
          <Briefcase size={16} />
        </div>
        <div className="timeline-line"></div>
      </div>
      
      <div className="timeline-content">
        <div 
          className="experience-card" 
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') setIsExpanded(!isExpanded); }}
        >
          <div className="experience-header">
            <div>
              <h3 className="experience-role">{exp.role}</h3>
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
              {isOverlap && (
                <div className="overlap-badge">Concurrent Role</div>
              )}
            </div>
            <button className="expand-btn" aria-label="Toggle details">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className={`experience-body ${isExpanded ? 'expanded' : ''}`}>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="experience-section">
      <Container>
        <SectionTitle 
          title="Experience Timeline" 
          subtitle="A track record of engineering scalable platforms and leading development teams." 
        />
        
        <div className="timeline-container">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id || index} exp={exp} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Experience;
