import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import './ThemeCustomizer.css';

export const ThemeCustomizer = ({ inline = false, onAction = null }) => {
  const { mode, accent, setMode, setAccent, toggleMode, accentList, currentAccent, modes } = useTheme();
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

  // If inline (e.g. inside mobile drawer)
  if (inline) {
    return (
      <div className="mobile-theme-panel" aria-label="Theme Customization">
        <h4 className="mobile-theme-panel-title">Appearance & Theme</h4>

        {/* Mode Toggle */}
        <div className="theme-mode-toggle" role="radiogroup" aria-label="Color Mode">
          <button
            type="button"
            className={`mode-btn ${mode === modes.LIGHT ? 'active' : ''}`}
            onClick={() => handleSelectMode(modes.LIGHT)}
            aria-checked={mode === modes.LIGHT}
            role="radio"
          >
            <Sun size={16} /> Light
          </button>
          <button
            type="button"
            className={`mode-btn ${mode === modes.DARK ? 'active' : ''}`}
            onClick={() => handleSelectMode(modes.DARK)}
            aria-checked={mode === modes.DARK}
            role="radio"
          >
            <Moon size={16} /> Dark
          </button>
        </div>

        {/* Accent Colors */}
        <div className="theme-section">
          <span className="theme-section-label">Accent Color</span>
          <div className="accent-swatches-grid" role="radiogroup" aria-label="Accent Color Options">
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

  // Floating Popover for Navbar
  return (
    <div className="theme-customizer" ref={containerRef}>
      <div className="theme-pill">
        {/* Quick Mode Toggle */}
        <button
          type="button"
          className="theme-pill-btn"
          onClick={toggleMode}
          aria-label={`Switch to ${mode === modes.LIGHT ? 'dark' : 'light'} mode`}
          title={`Switch to ${mode === modes.LIGHT ? 'dark' : 'light'} mode`}
        >
          {mode === modes.LIGHT ? (
            <Moon size={18} className="icon-moon" />
          ) : (
            <Sun size={18} className="icon-sun" />
          )}
        </button>

        {/* Palette Customizer Trigger */}
        <button
          type="button"
          className={`theme-pill-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Customize accent colors and theme"
          title="Customize accent colors"
        >
          <Palette size={18} />
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
          aria-label="Theme Preferences"
        >
          <div className="theme-popover-header">
            <span className="theme-popover-title">
              <Palette size={16} /> Theme Settings
            </span>
            <span className="theme-popover-status">
              {currentAccent.name}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="theme-section">
            <span className="theme-section-label">Color Mode</span>
            <div className="theme-mode-toggle" role="radiogroup" aria-label="Color Mode">
              <button
                type="button"
                className={`mode-btn ${mode === modes.LIGHT ? 'active' : ''}`}
                onClick={() => handleSelectMode(modes.LIGHT)}
                aria-checked={mode === modes.LIGHT}
                role="radio"
              >
                <Sun size={15} /> Light
              </button>
              <button
                type="button"
                className={`mode-btn ${mode === modes.DARK ? 'active' : ''}`}
                onClick={() => handleSelectMode(modes.DARK)}
                aria-checked={mode === modes.DARK}
                role="radio"
              >
                <Moon size={15} /> Dark
              </button>
            </div>
          </div>

          {/* Accent Options */}
          <div className="theme-section">
            <span className="theme-section-label">Accent Theme</span>
            <div className="accent-swatches-grid" role="radiogroup" aria-label="Accent Themes">
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
