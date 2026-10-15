import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LanguageContext } from './languageContextInstance';
import { translations } from '../data/translations';

const STORAGE_KEY = 'portfolio_lang';
const SUPPORTED_LANGS = ['en', 'ar'];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) {
        return saved;
      }
      return 'en';
    } catch {
      return 'en';
    }
  });

  // Apply language, dir, and font attributes to root element
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }

    const isRtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  const setLanguage = useCallback((newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      setLanguageState(newLang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  // Helper function to get nested translation strings safely
  const t = useCallback((path, fallback = '') => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if missing in target language
        let fallbackVal = translations.en;
        for (const fKey of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fKey in fallbackVal) {
            fallbackVal = fallbackVal[fKey];
          } else {
            return fallback || path;
          }
        }
        return fallbackVal || fallback || path;
      }
    }
    return current;
  }, [language]);

  const content = useMemo(() => {
    return translations[language] || translations.en;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    isRTL,
    dir,
    t,
    content
  }), [language, setLanguage, toggleLanguage, isRTL, dir, t, content]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
