import React from 'react';
import { projects } from '../../data/projects';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import Badge from '../common/Badge';
import { ExternalLink, Layers, ShieldCheck, Terminal } from 'lucide-react';
import './Projects.css';

const getProjectIcon = (id) => {
  switch(id) {
    case 'mapp': return <Layers size={32} className="project-icon" />;
    case 'gov-correspondence': return <ShieldCheck size={32} className="project-icon" />;
    case 'epm': return <Terminal size={32} className="project-icon" />;
    default: return <Layers size={32} className="project-icon" />;
  }
};

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <Container>
        <SectionTitle 
          title="Flagship Projects" 
          subtitle="Deep dive into complex, enterprise-grade systems I've architected." 
        />
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card">
              <div className="project-header">
                <div className="project-icon-wrapper">
                  {getProjectIcon(project.id)}
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Capabilities</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
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
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Projects;
