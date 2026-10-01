import React from 'react';
import { profile } from '../../data/profile';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import './About.css';

const About = () => {
  return (
    <AnimatedSection id="about" className="about-section">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <SectionTitle title="About Me" subtitle="A narrative of continuous technical progression." />
            
            <div className="about-prose">
              <p>
                As a <strong>{profile.role}</strong>, I specialize in transforming complex business requirements into elegant, high-performance web applications. My focus lies in <strong>Enterprise Systems Architecture</strong>, where maintaining clarity in code is just as vital as the final user experience.
              </p>
              <p>
                Over the past 7+ years, I have progressed from building localized interfaces to architecting massive platforms—ranging from <strong>Executive Action Control Centers</strong> to highly secure <strong>Government Correspondence Platforms</strong>.
              </p>
              <p>
                I thrive in environments that require unifying disconnected services through <strong>Micro-Frontends</strong> and <strong>Monorepos</strong>. Today, a significant part of my work involves leading engineering teams, enforcing strict code standards, and integrating <strong>AI Agents</strong> to streamline both developer productivity and end-user workflows.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {profile.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default About;
