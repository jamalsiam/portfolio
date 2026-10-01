import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import './Architecture.css';

const Architecture = () => {
  const [activeNode, setActiveNode] = useState(null);

  const handleNodeEnter = (node) => setActiveNode(node);
  const handleNodeLeave = () => setActiveNode(null);

  return (
    <AnimatedSection id="architecture" className="architecture-section">
      <Container>
        <SectionTitle 
          title="Engineering & Architecture" 
          subtitle="Building scalable, unified experiences by decoupling monolithic enterprise systems." 
        />
        
        <div className="architecture-visual-container">
          <div className="arch-tree">
            
            {/* Top Level */}
            <div 
              className={`arch-node level-1 ${activeNode === 'platform' ? 'active' : ''}`}
              onMouseEnter={() => handleNodeEnter('platform')}
              onMouseLeave={handleNodeLeave}
            >
              Enterprise Platform
            </div>
            
            <div className="arch-connector vertical"></div>

            {/* Frameworks Level */}
            <div className="arch-row">
              <div className="arch-connector horizontal framework"></div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'react' || activeNode === 'platform' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('react')}
                  onMouseLeave={handleNodeLeave}
                >
                  React
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'angular' || activeNode === 'platform' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('angular')}
                  onMouseLeave={handleNodeLeave}
                >
                  Angular
                </div>
                <div className="arch-connector vertical short"></div>
              </div>

              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'react-native' || activeNode === 'platform' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('react-native')}
                  onMouseLeave={handleNodeLeave}
                >
                  React Native
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
            </div>

            <div className="arch-connector vertical"></div>

            {/* Shared Systems Level */}
            <div 
              className={`arch-node level-1 core ${activeNode === 'shared' ? 'active' : ''}`}
              onMouseEnter={() => handleNodeEnter('shared')}
              onMouseLeave={handleNodeLeave}
            >
              Shared Systems
            </div>

            <div className="arch-connector vertical"></div>

            {/* Architecture Patterns Level */}
            <div className="arch-row">
              <div className="arch-connector horizontal patterns"></div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'monorepo' || activeNode === 'shared' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('monorepo')}
                  onMouseLeave={handleNodeLeave}
                >
                  Monorepo
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'mfe' || activeNode === 'shared' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('mfe')}
                  onMouseLeave={handleNodeLeave}
                >
                  Micro-Frontends
                </div>
                <div className="arch-connector vertical short"></div>
              </div>

              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'api' || activeNode === 'shared' ? 'active' : ''}`}
                  onMouseEnter={() => handleNodeEnter('api')}
                  onMouseLeave={handleNodeLeave}
                >
                  APIs & Auth
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
            </div>

            <div className="arch-connector vertical"></div>
            
            {/* Base Systems */}
            <div className="arch-node level-4">
              Legacy Enterprise Apps / Source Systems
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Architecture;
