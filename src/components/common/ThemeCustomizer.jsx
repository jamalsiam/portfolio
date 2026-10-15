import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { Sun, Moon, Palette, Check, Globe } from 'lucide-react';
import './ThemeCustomizer.css';

export const ThemeCustomizer = ({ inline = false, onAction = null }) => {
  const { mode, accent, setMode, setAccent, toggleMode, accentList, currentAccent, modes } = useTheme();
  const { language, setLanguage, content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectMode = (newMode) => {
    setMode(newMode);
    if (onAction) onAction();
  };

  const handleSelectAccent = (newAccentId) => {
    setAccent(newAccentId);
    if (onAction) onAction();
  };

  // If inline (inside mobile drawer)
  if (inline) {
    return (
      <div className="mobile-theme-panel" aria-label={content.theme.appearance}>
        <h4 className="mobile-theme-panel-title">{content.theme.appearance}</h4>

        {/* Mode Toggle */}
        <div className="theme-mode-toggle" role="radiogroup" aria-label={content.theme.colorMode}>
          <button
            type="button"
            className={`mode-btn ${mode === modes.LIGHT ? 'active' : ''}`}
            onClick={() => handleSelectMode(modes.LIGHT)}
            aria-checked={mode === modes.LIGHT}
            role="radio"
          >
            <Sun size={16} /> {content.theme.light}
          </button>
          <button
            type="button"
            className={`mode-btn ${mode === modes.DARK ? 'active' : ''}`}
            onClick={() => handleSelectMode(modes.DARK)}
            aria-checked={mode === modes.DARK}
            role="radio"
          >
            <Moon size={16} /> {content.theme.dark}
          </button>
        </div>

        {/* Accent Colors */}
        <div className="theme-section">
          <span className="theme-section-label">{content.theme.accentColor}</span>
          <div className="accent-swatches-grid" role="radiogroup" aria-label={content.theme.accentColor}>
            {accentList.map((item) => {
              const isSelected = item.id === accent;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`accent-swatch-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectAccent(item.id)}
                  aria-checked={isSelected}
                  role="radio"
                  title={`${item.name} theme`}
                >
                  <span
                    className="swatch-circle"
                    style={{ backgroundColor: item.previewColor }}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                  </span>
                  <span className="swatch-name">{item.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Unified Header Preferences Capsule for Desktop Navbar
  return (
    <div className="theme-customizer" ref={containerRef}>
      <div className="header-preferences-capsule">
        {/* Language Switcher Segment */}
        <div className="pref-lang-group" role="group" aria-label="Language selection">
          <Globe size={13} className="pref-globe-icon" aria-hidden="true" />
          <button
            type="button"
            className={`pref-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            title="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            className={`pref-lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => setLanguage('ar')}
            aria-pressed={language === 'ar'}
            title="التحويل إلى العربية"
          >
            عربي
          </button>
        </div>

        <span className="pref-divider" aria-hidden="true" />

        {/* Quick Mode Toggle */}
        <button
          type="button"
          className="pref-icon-btn"
          onClick={toggleMode}
          aria-label={mode === modes.LIGHT ? `Switch to ${content.theme.dark}` : `Switch to ${content.theme.light}`}
          title={mode === modes.LIGHT ? content.theme.dark : content.theme.light}
        >
          {mode === modes.LIGHT ? (
            <Moon size={16} className="icon-moon" />
          ) : (
            <Sun size={16} className="icon-sun" />
          )}
        </button>

        {/* Palette Customizer Trigger */}
        <button
          type="button"
          className={`pref-icon-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={content.theme.themeSettings}
          title={content.theme.themeSettings}
        >
          <Palette size={16} />
          <span
            className="accent-dot-badge"
            style={{ backgroundColor: currentAccent.previewColor }}
          />
        </button>
      </div>

      {/* Popover Menu */}
      {isOpen && (
        <div
          className="theme-popover"
          role="dialog"
          aria-modal="false"
          aria-label={content.theme.themeSettings}
        >
          <div className="theme-popover-header">
            <span className="theme-popover-title">
              <Palette size={16} /> {content.theme.themeSettings}
            </span>
            <span className="theme-popover-status">
              {currentAccent.name}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="theme-section">
            <span className="theme-section-label">{content.theme.colorMode}</span>
            <div className="theme-mode-toggle" role="radiogroup" aria-label={content.theme.colorMode}>
              <button
                type="button"
                className={`mode-btn ${mode === modes.LIGHT ? 'active' : ''}`}
                onClick={() => handleSelectMode(modes.LIGHT)}
                aria-checked={mode === modes.LIGHT}
                role="radio"
              >
                <Sun size={15} /> {content.theme.light}
              </button>
              <button
                type="button"
                className={`mode-btn ${mode === modes.DARK ? 'active' : ''}`}
                onClick={() => handleSelectMode(modes.DARK)}
                aria-checked={mode === modes.DARK}
                role="radio"
              >
                <Moon size={15} /> {content.theme.dark}
              </button>
            </div>
          </div>

          {/* Accent Options */}
          <div className="theme-section">
            <span className="theme-section-label">{content.theme.accentColor}</span>
            <div className="accent-swatches-grid" role="radiogroup" aria-label={content.theme.accentColor}>
              {accentList.map((item) => {
                const isSelected = item.id === accent;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`accent-swatch-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectAccent(item.id)}
                    aria-checked={isSelected}
                    role="radio"
                    title={item.name}
                  >
                    <span
                      className="swatch-circle"
                      style={{ backgroundColor: item.previewColor }}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </span>
                    <span className="swatch-name">{item.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
