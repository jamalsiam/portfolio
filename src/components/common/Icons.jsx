import React from 'react';

export const Github = ({ size = 24, className = '', style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.6-.5-2.9-1.3-4.03.15-.4.6-1.93-.15-4.03 0 0-1.1-.35-3.6 1.35a12.5 12.5 0 0 0-6.6 0C6.3 2.5 5.2 2.85 5.2 2.85c-.75 2.1-.3 3.63-.15 4.03-1 1.15-1.5 2.43-1.5 4.03 0 5.75 3.35 6.8 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

export const Linkedin = ({ size = 24, className = '', style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
