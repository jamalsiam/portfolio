import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';
import { Layers, Cpu, Shield, Sparkles, CheckCircle, Info } from 'lucide-react';
import './Architecture.css';

const ARCH_NODE_DETAILS = {
  platform: {
    title: 'Enterprise Platform Orchestration',
    subtitle: 'Unified Shell & Executive Action Control',
    description: 'Host application acting as the overarching shell for MApp, Government Correspondence, and EPM. Handles global authentication, micro-app routing, and centralized notification buses.',
    principles: ['Single Sign-On (OAuth 2.0 / OIDC)', 'Cross-Module Shell Navigation', 'Centralized Real-Time Event Bus'],
    stack: ['Angular / React Host Shell', 'Module Federation', 'Azure Cloud']
  },
  react: {
    title: 'React & React Native Ecosystem',
    subtitle: 'Cross-Platform Mobile & Web Interfaces',
    description: 'Powers cross-platform executive interfaces, real-time dashboards, and high-performance interactive controls with modern state management.',
    principles: ['Cross-Platform Code Sharing', 'Declarative UI & Custom Hooks', 'Optimistic UI Updates'],
    stack: ['React 19', 'React Native', 'Redux Toolkit', 'TypeScript']
  },
  angular: {
    title: 'Angular & Angular Signals',
    subtitle: 'High-Concurrency Government & Enterprise Workflows',
    description: 'Engineered for strict enterprise compliance, deep reactive event processing, and seamless document tracking with modern Angular Signals & RxJS.',
    principles: ['Fine-Grained Reactivity (Signals)', 'RxJS Reactive Streams', 'Strict Type-Safe Dependency Injection'],
    stack: ['Angular Framework', 'Angular Signals', 'RxJS', 'NgRx Store']
  },
  'react-native': {
    title: 'Cross-Platform Mobile Systems',
    subtitle: 'Native Mobile Performance for Executives',
    description: 'Delivers native-level iOS and Android experiences for executive action hubs, supporting stylus scribbling, biometric e-signatures, and voice notes.',
    principles: ['60 FPS Native UI Threads', 'Offline Document Storage', 'Biometric Authentication'],
    stack: ['React Native', 'Native Modules', 'Secure Enclave Storage']
  },
  shared: {
    title: 'Shared Systems Governance',
    subtitle: 'Unified Core Libraries & Design System',
    description: 'Shared component libraries, tokenized design systems, authentication interceptors, and common data models reused across all micro-frontends.',
    principles: ['Zero Redundant Code', 'Centralized Design Tokens', 'Shared Contract Governance'],
    stack: ['CSS Custom Properties', 'Shared HTTP Interceptors', 'Reusable Component Packages']
  },
  monorepo: {
    title: 'Enterprise Monorepo Architecture',
    subtitle: 'Atomic Commits & Coordinated Versioning',
    description: 'Consolidates multi-app codebases into unified repositories, enabling atomic refactoring, shared CI/CD pipelines, and high developer velocity.',
    principles: ['Atomic Dependency Updates', 'Unified Linting & Quality Gates', 'High-Speed Incremental Builds'],
    stack: ['Nx Monorepos', 'Git', 'Azure DevOps Pipelines']
  },
  mfe: {
    title: 'Micro-Frontend Federation',
    subtitle: 'Decoupled Team Autonomy & Independent Deployments',
    description: 'Decouples monolithic frontends into autonomously deployable domain micro-apps. Prevents cross-team delivery bottlenecks.',
    principles: ['Independent Deployment Cycles', 'Isolated Runtime Failures', 'Domain-Driven Ownership'],
    stack: ['Module Federation', 'Single-SPA', 'Dynamic Remote Loading']
  },
  api: {
    title: 'APIs, Security & Offline Sync',
    subtitle: 'Resilient Data Synchronization & Cryptographic Signatures',
    description: 'Robust RESTful API integration, offline-first storage, voice notes, PDF annotation persistence, and automatic background sync.',
    principles: ['Offline-First Persistence', 'Background Conflict Resolution', 'OAuth 2.0 / OIDC Token Refresh'],
    stack: ['IndexedDB', 'Service Workers', 'OAuth 2.0 / OIDC', 'RESTful APIs']
  }
};

const Architecture = () => {
  const [activeNode, setActiveNode] = useState('mfe');

  const activeDetails = ARCH_NODE_DETAILS[activeNode] || ARCH_NODE_DETAILS['platform'];

  const handleNodeClick = (nodeKey) => {
    setActiveNode(nodeKey);
  };

  return (
    <AnimatedSection id="architecture" className="architecture-section">
      <Container>
        <SectionTitle 
          title="Engineering & Architecture" 
          subtitle="Building scalable, unified enterprise experiences by decoupling monolithic enterprise systems." 
        />

        {/* Architectural Principles Pill Banner */}
        <div className="arch-principles-row">
          <div className="arch-principle-pill">
            <Layers size={14} className="principle-icon" />
            <span>Decoupled Deployability</span>
          </div>
          <div className="arch-principle-pill">
            <Cpu size={14} className="principle-icon" />
            <span>Framework Coexistence</span>
          </div>
          <div className="arch-principle-pill">
            <Shield size={14} className="principle-icon" />
            <span>Resilient Offline-First Sync</span>
          </div>
          <div className="arch-principle-pill">
            <Sparkles size={14} className="principle-icon" />
            <span>Design System Governance</span>
          </div>
        </div>
        
        <div className="architecture-visual-container">
          <div className="arch-tree">
            {/* Top Level */}
            <div 
              className={`arch-node level-1 ${activeNode === 'platform' ? 'active' : ''}`}
              onClick={() => handleNodeClick('platform')}
              role="button"
              tabIndex={0}
              title="Click to inspect Enterprise Platform"
            >
              Enterprise Platform
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
                  title="Click to inspect React Ecosystem"
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
                  title="Click to inspect Angular Signals"
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
                  title="Click to inspect React Native"
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
              title="Click to inspect Shared Systems"
            >
              Shared Systems & Design Tokens
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
                  title="Click to inspect Monorepo"
                >
                  Monorepo
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
                  title="Click to inspect Micro-Frontends"
                >
                  Micro-Frontends
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
                  title="Click to inspect APIs & Offline Sync"
                >
                  APIs & Offline Sync
                </div>
                <div className="arch-connector vertical short"></div>
              </div>
            </div>

            <div className="arch-connector vertical"></div>
            
            {/* Base Systems */}
            <div className="arch-node level-4">
              Legacy Enterprise Apps / Underlying Source Systems
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
            <span className="inspector-active-pill">Interactive Blueprint Node</span>
          </div>

          <p className="inspector-desc">{activeDetails.description}</p>

          <div className="inspector-details-grid">
            <div className="inspector-section">
              <span className="inspector-label">Architectural Principles</span>
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
              <span className="inspector-label">Core Implementation Stack</span>
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
