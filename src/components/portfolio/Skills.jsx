import React, { useState } from 'react';
import { skills } from '../../data/skills';
import { useLanguage } from '../../hooks/useLanguage';
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

const getCategoryKey = (categoryName) => {
  if (categoryName.includes('Frontend')) return 'frontend';
  if (categoryName.includes('Architecture')) return 'architecture';
  if (categoryName.includes('AI')) return 'ai';
  if (categoryName.includes('Tools')) return 'tools';
  if (categoryName.includes('Soft')) return 'soft';
  return 'frontend';
};

const getCategoryIcon = (key) => {
  switch(key) {
    case 'frontend': return <Code2 size={20} className="category-icon" />;
    case 'architecture': return <Layers size={20} className="category-icon" />;
    case 'ai': return <Bot size={20} className="category-icon" />;
    case 'tools': return <Wrench size={20} className="category-icon" />;
    case 'soft': return <Users size={20} className="category-icon" />;
    default: return <Code2 size={20} className="category-icon" />;
  }
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { content, language } = useLanguage();

  const filterCategories = [
    { id: 'all', label: content.skills.filters.all },
    { id: 'frontend', label: content.skills.filters.frontend },
    { id: 'architecture', label: content.skills.filters.architecture },
    { id: 'ai', label: content.skills.filters.ai },
    { id: 'tools', label: content.skills.filters.tools },
    { id: 'soft', label: content.skills.filters.soft },
  ];

  const filteredSkills = skills.filter((cat) => {
    if (selectedFilter === 'all') return true;
    const catKey = getCategoryKey(cat.category);
    return catKey === selectedFilter;
  });

  return (
    <AnimatedSection id="skills" className="skills-section">
      <Container>
        <SectionTitle 
          title={content.skills.title} 
          subtitle={content.skills.subtitle} 
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
            const catKey = getCategoryKey(category.category);
            const isFeaturedCategory = ['frontend', 'architecture', 'ai'].includes(catKey);
            const icon = getCategoryIcon(catKey);
            const localizedTitle = content.skills.categories?.[catKey] || category.category;
            const localizedBadge = content.skills.badges?.[catKey] || 'Core';

            return (
              <div 
                key={idx} 
                className={`skills-category-card ${isFeaturedCategory ? 'card-featured' : ''}`}
              >
                <div className="skills-category-header">
                  <div className="skills-title-group">
                    <div className="category-icon-wrapper">
                      {icon}
                    </div>
                    <div>
                      <h3 className="skills-category-title">{localizedTitle}</h3>
                      <span className="skills-meta-badge">{localizedBadge}</span>
                    </div>
                  </div>
                  <span className="skills-count-badge">
                    {category.items.length} {content.skills.skillsUnit}
                  </span>
                </div>

                <div className="skills-list">
                  {category.items.map((skill, skillIdx) => {
                    const isFeatured = FLAGSHIP_SKILLS.has(skill);
                    let displaySkill = skill;
                    if (catKey === 'soft' && language === 'ar' && content.skills.softSkills?.[skill]) {
                      displaySkill = content.skills.softSkills[skill];
                    }

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
                        <span className="skill-item-text">{displaySkill}</span>
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
