import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Globe } from 'lucide-react';
import './LanguageToggle.css';

export const LanguageToggle = ({ inline = false, onAction = null }) => {
  const { language, setLanguage } = useLanguage();

  const handleSelect = (lang) => {
    if (language !== lang) {
      setLanguage(lang);
      if (onAction) onAction();
    }
  };

  return (
    <div 
      className={`language-toggle-pill ${inline ? 'inline' : ''}`}
      role="group"
      aria-label="Language selection"
    >
      <span className="lang-icon-wrap" aria-hidden="true">
        <Globe size={14} />
      </span>
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleSelect('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        {inline ? 'English' : 'EN'}
      </button>
      <button
        type="button"
        className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
        onClick={() => handleSelect('ar')}
        aria-pressed={language === 'ar'}
        title="التحويل إلى العربية"
      >
        {inline ? 'العربية' : 'عربي'}
      </button>
    </div>
  );
};

export default LanguageToggle;
