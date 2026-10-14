import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ThemeContext } from './themeContextInstance';
import {
  THEME_MODES,
  ACCENT_THEMES,
  STORAGE_KEYS,
  DEFAULT_MODE,
  DEFAULT_ACCENT,
  getAccentTheme,
  isValidMode,
  isValidAccent,
} from '../config/themes';

function getInitialMode() {
  if (typeof window === 'undefined') return DEFAULT_MODE;
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.MODE) || localStorage.getItem(STORAGE_KEYS.LEGACY);
    if (isValidMode(stored)) {
      return stored;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_MODES.DARK;
    }
  } catch (e) {
    console.warn('Failed to read theme mode from storage', e);
  }
  return DEFAULT_MODE;
}

function getInitialAccent() {
  if (typeof window === 'undefined') return DEFAULT_ACCENT;
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ACCENT);
    if (isValidAccent(stored)) {
      return stored;
    }
  } catch (e) {
    console.warn('Failed to read theme accent from storage', e);
  }
  return DEFAULT_ACCENT;
}

export function ThemeProvider({ children }) {
  const [mode, setModeState] = useState(getInitialMode);
  const [accent, setAccentState] = useState(getInitialAccent);

  // Apply mode to DOM and storage
  const setMode = useCallback((newMode) => {
    if (!isValidMode(newMode)) return;
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEYS.MODE, newMode);
      localStorage.setItem(STORAGE_KEYS.LEGACY, newMode);
    } catch (e) {
      console.warn('Failed to save theme mode to storage', e);
    }
  }, []);

  // Apply accent to DOM and storage
  const setAccent = useCallback((newAccent) => {
    if (!isValidAccent(newAccent)) return;
    setAccentState(newAccent);
    try {
      localStorage.setItem(STORAGE_KEYS.ACCENT, newAccent);
    } catch (e) {
      console.warn('Failed to save theme accent to storage', e);
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT);
  }, [mode, setMode]);

  // Synchronize DOM attributes whenever mode or accent changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-theme', mode);
    root.setAttribute('data-accent', accent);
    root.style.colorScheme = mode;
  }, [mode, accent]);

  // Listen to system color-scheme changes if user hasn't explicitly set preference
  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const hasStoredMode = Boolean(localStorage.getItem(STORAGE_KEYS.MODE) || localStorage.getItem(STORAGE_KEYS.LEGACY));
      if (!hasStoredMode) {
        setModeState(e.matches ? THEME_MODES.DARK : THEME_MODES.LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const currentAccent = useMemo(() => getAccentTheme(accent), [accent]);

  const value = useMemo(
    () => ({
      mode,
      accent,
      setMode,
      setAccent,
      toggleMode,
      // Backward-compatible properties
      theme: mode,
      toggleTheme: toggleMode,
      currentAccent,
      accentList: ACCENT_THEMES,
      modes: THEME_MODES,
    }),
    [mode, accent, setMode, setAccent, toggleMode, currentAccent]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
