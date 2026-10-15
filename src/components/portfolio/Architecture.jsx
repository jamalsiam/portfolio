import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { Layers, Cpu, Shield, Sparkles, CheckCircle, Info } from 'lucide-react';
import './Architecture.css';

const PRINCIPLE_ICONS = [Layers, Cpu, Shield, Sparkles];

const Architecture = () => {
  const [activeNode, setActiveNode] = useState('mfe');
  const { content, language } = useLanguage();

  const nodes = content.architecture.nodes;
  const activeDetails = nodes[activeNode] || nodes.platform;

  const handleNodeClick = (nodeKey) => {
    setActiveNode(nodeKey);
  };

  const isAr = language === 'ar';

  return (
    <AnimatedSection id="architecture" className="architecture-section">
      <Container>
        <SectionTitle 
          title={content.architecture.title} 
          subtitle={content.architecture.subtitle} 
        />

        {/* Architectural Principles Pill Banner */}
        <div className="arch-principles-row">
          {content.architecture.principles.map((principle, idx) => {
            const IconComp = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length] || Layers;
            return (
              <div key={idx} className="arch-principle-pill">
                <IconComp size={14} className="principle-icon" />
                <span>{principle}</span>
              </div>
            );
          })}
        </div>
        
        <div className="architecture-visual-container">
          <div className="arch-tree">
            {/* Top Level */}
            <div 
              className={`arch-node level-1 ${activeNode === 'platform' ? 'active' : ''}`}
              onClick={() => handleNodeClick('platform')}
              role="button"
              tabIndex={0}
              title={isAr ? 'انقر لمعاينة المنصة المؤسسية' : 'Click to inspect Enterprise Platform'}
            >
              {isAr ? 'المنظومة المؤسسية الشاملة' : 'Enterprise Platform'}
            </div>
            
            <div className="arch-connector vertical"></div>

            {/* Frameworks Level */}
            <div className="arch-row">
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'react' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('react')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة منظومة React' : 'Click to inspect React Ecosystem'}
                >
                  React 19
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'angular' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('angular')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة Angular Signals' : 'Click to inspect Angular Signals'}
                >
                  Angular & Signals
                </div>
                <div className="arch-connector vertical short"></div>
              </div>

              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-2 ${activeNode === 'react-native' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('react-native')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة React Native' : 'Click to inspect React Native'}
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
              onClick={() => handleNodeClick('shared')}
              role="button"
              tabIndex={0}
              title={isAr ? 'انقر لمعاينة الأنظمة المشتركة' : 'Click to inspect Shared Systems'}
            >
              {isAr ? 'الأنظمة المشتركة ورموز التصميم' : 'Shared Systems & Design Tokens'}
            </div>

            <div className="arch-connector vertical"></div>

            {/* Architecture Patterns Level */}
            <div className="arch-row">
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'monorepo' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('monorepo')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة Monorepo' : 'Click to inspect Monorepo'}
                >
                  {isAr ? 'مستودع Monorepo' : 'Monorepo'}
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
              
              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'mfe' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('mfe')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة الواجهات المصغرة' : 'Click to inspect Micro-Frontends'}
                >
                  {isAr ? 'الواجهات المصغرة (MFEs)' : 'Micro-Frontends'}
                </div>
                <div className="arch-connector vertical short"></div>
              </div>

              <div className="arch-col">
                <div className="arch-connector vertical short"></div>
                <div 
                  className={`arch-node level-3 ${activeNode === 'api' ? 'active' : ''}`}
                  onClick={() => handleNodeClick('api')}
                  role="button"
                  tabIndex={0}
                  title={isAr ? 'انقر لمعاينة واجهات APIs' : 'Click to inspect APIs & Offline Sync'}
                >
                  {isAr ? 'الواجهات والمزامنة' : 'APIs & Offline Sync'}
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
            </div>

            <div className="arch-connector vertical"></div>
            
            {/* Base Systems */}
            <div className="arch-node level-4">
              {isAr ? 'الأنظمة المؤسسية القديمة / مصادر البيانات الأصلية' : 'Legacy Enterprise Apps / Underlying Source Systems'}
            </div>
          </div>
        </div>

        {/* Interactive Architecture Inspector Panel */}
        <div className="arch-inspector-card">
          <div className="inspector-header">
            <div className="inspector-title-group">
              <Info size={18} className="inspector-icon" />
              <div>
                <h4 className="inspector-title">{activeDetails.title}</h4>
                <p className="inspector-subtitle">{activeDetails.subtitle}</p>
              </div>
            </div>
            <span className="inspector-active-pill">
              {content.architecture.inspectorLabels.activeSpec}
            </span>
          </div>

          <p className="inspector-desc">{activeDetails.description}</p>

          <div className="inspector-details-grid">
            <div className="inspector-section">
              <span className="inspector-label">{content.architecture.inspectorLabels.principles}</span>
              <ul className="inspector-list">
                {activeDetails.principles.map((p, idx) => (
                  <li key={idx}>
                    <CheckCircle size={14} className="inspector-check" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inspector-section">
              <span className="inspector-label">{content.architecture.inspectorLabels.stack}</span>
              <div className="inspector-stack">
                {activeDetails.stack.map((s, idx) => (
                  <span key={idx} className="inspector-stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};

export default Architecture;
