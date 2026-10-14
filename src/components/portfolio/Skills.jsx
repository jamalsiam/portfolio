import React, { useState } from 'react';
import { skills } from '../../data/skills';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { Code2, Layers, Bot, Wrench, Users, Sparkles } from 'lucide-react';
import './Skills.css';

const FLAGSHIP_SKILLS = new Set([
  'React',
  'React Native',
  'Angular Framework',
  'Angular Signals',
  'TypeScript',
  'NodeJS',
  'NestJS',
  'Micro-Frontend Architecture',
  'Monorepos',
  'Executive Control Center Apps',
  'Offline Sync',
  'AI Agents Integration',
  'LLM Workflow Orchestration',
  'Autonomous Coding Agents',
  'Azure DevOps',
  'Leadership',
  'Mentoring'
]);

const getCategoryMeta = (category) => {
  if (category.includes('Frontend')) {
    return {
      icon: <Code2 size={20} className="category-icon" />,
      badge: "Core Mastery",
      featured: true
    };
  }
  if (category.includes('Architecture')) {
    return {
      icon: <Layers size={20} className="category-icon" />,
      badge: "System Design",
      featured: true
    };
  }
  if (category.includes('AI')) {
    return {
      icon: <Bot size={20} className="category-icon" />,
      badge: "Next-Gen DevX",
      featured: true
    };
  }
  if (category.includes('Tools')) {
    return {
      icon: <Wrench size={20} className="category-icon" />,
      badge: "DevOps & Tooling",
      featured: false
    };
  }
  if (category.includes('Soft')) {
    return {
      icon: <Users size={20} className="category-icon" />,
      badge: "Culture & Team",
      featured: false
    };
  }
  return {
    icon: <Code2 size={20} className="category-icon" />,
    badge: "Competency",
    featured: false
  };
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Domains' },
    { id: 'frontend', label: 'Frontend & Cross-Platform' },
    { id: 'architecture', label: 'Architecture & Systems' },
    { id: 'ai', label: 'AI & Emerging Tech' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'soft', label: 'Leadership & Soft Skills' },
  ];

  const filteredSkills = skills.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'frontend') return cat.category.includes('Frontend');
    if (selectedFilter === 'architecture') return cat.category.includes('Architecture');
    if (selectedFilter === 'ai') return cat.category.includes('AI');
    if (selectedFilter === 'tools') return cat.category.includes('Tools');
    if (selectedFilter === 'soft') return cat.category.includes('Soft');
    return true;
  });

  return (
    <AnimatedSection id="skills" className="skills-section">
      <Container>
        <SectionTitle 
          title="Technical Expertise" 
          subtitle="Enterprise frontend architecture, modern frameworks, agentic workflows, and engineering leadership." 
        />

        {/* Interactive Filter Pills */}
        <div className="skills-filter-wrapper">
          <div className="skills-filter-row" role="tablist" aria-label="Skills Category Filters">
            {filterCategories.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`skills-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
                role="tab"
                aria-selected={selectedFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((category, idx) => {
            const meta = getCategoryMeta(category.category);
            return (
              <div 
                key={idx} 
                className={`skills-category-card ${meta.featured ? 'card-featured' : ''}`}
              >
                <div className="skills-category-header">
                  <div className="skills-title-group">
                    <div className="category-icon-wrapper">
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="skills-category-title">{category.category}</h3>
                      <span className="skills-meta-badge">{meta.badge}</span>
                    </div>
                  </div>
                  <span className="skills-count-badge">{category.items.length} skills</span>
                </div>

                <div className="skills-list">
                  {category.items.map((skill, skillIdx) => {
                    const isFeatured = FLAGSHIP_SKILLS.has(skill);
                    return (
                      <div 
                        key={skillIdx} 
                        className={`skill-item ${isFeatured ? 'skill-featured' : ''}`}
                      >
                        {isFeatured ? (
                          <Sparkles size={11} className="skill-featured-icon" />
                        ) : (
                          <span className="skill-item-dot"></span>
                        )}
                        <span className="skill-item-text">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Skills;
