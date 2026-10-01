import React from 'react';
import { skills } from '../../data/skills';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import './Skills.css';

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="skills-section">
      <Container>
        <SectionTitle 
          title="Technical Expertise" 
          subtitle="A comprehensive toolkit focused on enterprise frontend architecture and engineering." 
        />
        
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="skills-category-card">
              <h3 className="skills-category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Skills;
