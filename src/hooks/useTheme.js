import { useContext } from 'react';
import { ThemeContext } from '../context/themeContextInstance';
import { THEME_MODES, ACCENT_THEMES, DEFAULT_MODE, DEFAULT_ACCENT, getAccentTheme } from '../config/themes';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      mode: DEFAULT_MODE,
      accent: DEFAULT_ACCENT,
      theme: DEFAULT_MODE,
      setMode: () => {},
      setAccent: () => {},
      toggleMode: () => {},
      toggleTheme: () => {},
      currentAccent: getAccentTheme(DEFAULT_ACCENT),
      accentList: ACCENT_THEMES,
      modes: THEME_MODES,
    };
  }
  return context;
}
