export const projects = [
  {
    id: "mapp",
    title: "MApp (Executive Action Control Center Platform)",
    category: "Unified Executive Workspace",
    description: "Architected and developed MApp, a personalized control center aggregating requests, tasks, meetings, projects, news, and documents from multiple underlying enterprise systems into a unified executive workspace.",
    features: [
      "Document viewing, scribbling notes, commenting, and PDF annotations",
      "E-signatures and approval/rejection workflows",
      "Offline mode with automatic source system synchronization",
      "Executive staff communication via notes, predefined actions, and voice notes"
    ],
    technologies: ["React", "React Native", "Micro-Frontends", "Offline Sync", "Enterprise APIs", "NodeJS / NestJS"]
  },
  {
    id: "gov-correspondence",
    title: "Government Correspondence Platform",
    category: "High-Security Government Platform",
    description: "Architected and led the front-end development of a high-security Government Correspondence System for Saudi Arabia entities using Angular, Angular Signals, and RxJS to manage workflows, tracking, and document signatures.",
    features: [
      "Comprehensive workflow management and automated routing",
      "Correspondence lifecycle tracking and audit trails",
      "High-security document signatures and verification",
      "Resilient, high-concurrency UI architecture"
    ],
    technologies: ["Angular", "Angular Signals", "RxJS", "Micro-Frontends", "OAuth 2.0 / OIDC"]
  },
  {
    id: "epm",
    title: "Enterprise Project Management (EPM) Platform",
    category: "Enterprise Analytics & Management",
    description: "Designed and built scalable front-end interfaces and interactive dashboards for an EPM platform, enabling resource management, project tracking, and real-time analytics.",
    features: [
      "Resource management and capacity forecasting",
      "End-to-end project tracking across multi-team deliverables",
      "Real-time analytics and interactive data dashboards",
      "Modular components within a monorepo architecture"
    ],
    technologies: ["Angular", "React", "Monorepo", "RESTful APIs", "Performance Optimization"]
  }
];
