import React from 'react';
import { projects } from '../../data/projects';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import Badge from '../common/Badge';
import { Layers, ShieldCheck, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import './Projects.css';

const getProjectIcon = (id) => {
  switch(id) {
    case 'mapp': return <Layers size={28} className="project-icon" />;
    case 'gov-correspondence': return <ShieldCheck size={28} className="project-icon" />;
    case 'epm': return <Terminal size={28} className="project-icon" />;
    default: return <Layers size={28} className="project-icon" />;
  }
};

const getProjectHighlight = (id) => {
  switch(id) {
    case 'mapp': return '6+ Enterprise Sources Unified · Offline-First';
    case 'gov-correspondence': return 'High-Security GovTech · Saudi Arabia';
    case 'epm': return 'Real-Time Multi-Team Analytics · Monorepo';
    default: return 'Enterprise Scaled Architecture';
  }
};

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <Container>
        <SectionTitle 
          title="Flagship Projects" 
          subtitle="Deep dive into complex, enterprise-grade systems I've architected and delivered." 
        />
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              {/* Window Titlebar */}
              <div className="project-titlebar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-body">
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="project-highlight-badge">
                    <Sparkles size={12} /> {getProjectHighlight(project.id)}
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Core Architectural Capabilities</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-footer">
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Projects;
