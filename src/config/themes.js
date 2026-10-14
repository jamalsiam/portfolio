/**
 * Centralized Theme Configuration & Design Tokens
 * 
 * Defines color modes (light/dark) and accent color presets.
 * Single source of truth for portfolio theme management.
 */

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ACCENT_THEMES = [
  {
    id: 'blue',
    name: 'Ocean Blue',
    description: 'Crisp cobalt blue, the classic enterprise signature',
    previewColor: '#2563eb',
    light: {
      color: '#2563eb',
      hover: '#1d4ed8',
      lightTint: '#eff6ff',
      gradientEnd: '#38bdf8',
      rgb: '37, 99, 235',
      contrast: '#ffffff',
    },
    dark: {
      color: '#3b82f6',
      hover: '#60a5fa',
      lightTint: 'rgba(59, 130, 246, 0.12)',
      gradientEnd: '#60a5fa',
      rgb: '59, 130, 246',
      contrast: '#ffffff',
    },
  },
  {
    id: 'emerald',
    name: 'Emerald Green',
    description: 'Fresh architectural green representing stability and precision',
    previewColor: '#10b981',
    light: {
      color: '#059669',
      hover: '#047857',
      lightTint: '#ecfdf5',
      gradientEnd: '#34d399',
      rgb: '5, 150, 105',
      contrast: '#ffffff',
    },
    dark: {
      color: '#10b981',
      hover: '#34d399',
      lightTint: 'rgba(16, 185, 129, 0.12)',
      gradientEnd: '#6ee7b7',
      rgb: '16, 185, 129',
      contrast: '#ffffff',
    },
  },
  {
    id: 'violet',
    name: 'Electric Violet',
    description: 'Vibrant purple tailored for modern high-performance engineering',
    previewColor: '#8b5cf6',
    light: {
      color: '#7c3aed',
      hover: '#6d28d9',
      lightTint: '#f5f3ff',
      gradientEnd: '#a78bfa',
      rgb: '124, 58, 237',
      contrast: '#ffffff',
    },
    dark: {
      color: '#8b5cf6',
      hover: '#a78bfa',
      lightTint: 'rgba(139, 92, 246, 0.14)',
      gradientEnd: '#c084fc',
      rgb: '139, 92, 246',
      contrast: '#ffffff',
    },
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    description: 'Warm gold and amber with energetic, high-contrast presence',
    previewColor: '#f59e0b',
    light: {
      color: '#d97706',
      hover: '#b45309',
      lightTint: '#fffbeb',
      gradientEnd: '#fbbf24',
      rgb: '217, 119, 6',
      contrast: '#ffffff',
    },
    dark: {
      color: '#f59e0b',
      hover: '#fbbf24',
      lightTint: 'rgba(245, 158, 11, 0.14)',
      gradientEnd: '#fcd34d',
      rgb: '245, 158, 11',
      contrast: '#ffffff',
    },
  },
  {
    id: 'rose',
    name: 'Crimson Rose',
    description: 'Sophisticated deep rose for a bold, distinctive aesthetic',
    previewColor: '#f43f5e',
    light: {
      color: '#e11d48',
      hover: '#be123c',
      lightTint: '#fff1f2',
      gradientEnd: '#fb7185',
      rgb: '225, 29, 72',
      contrast: '#ffffff',
    },
    dark: {
      color: '#f43f5e',
      hover: '#fb7185',
      lightTint: 'rgba(244, 63, 94, 0.14)',
      gradientEnd: '#fda4af',
      rgb: '244, 63, 94',
      contrast: '#ffffff',
    },
  },
  {
    id: 'cyan',
    name: 'Cyber Teal',
    description: 'Futuristic cyan and teal inspired by cloud and DevOps platforms',
    previewColor: '#06b6d4',
    light: {
      color: '#0891b2',
      hover: '#0e7490',
      lightTint: '#ecfeff',
      gradientEnd: '#22d3ee',
      rgb: '8, 145, 178',
      contrast: '#ffffff',
    },
    dark: {
      color: '#06b6d4',
      hover: '#22d3ee',
      lightTint: 'rgba(6, 182, 212, 0.14)',
      gradientEnd: '#67e8f9',
      rgb: '6, 182, 212',
      contrast: '#ffffff',
    },
  },
];

export const STORAGE_KEYS = {
  MODE: 'portfolio-theme-mode',
  ACCENT: 'portfolio-theme-accent',
  LEGACY: 'portfolio-theme',
};

export const DEFAULT_MODE = THEME_MODES.LIGHT;
export const DEFAULT_ACCENT = 'blue';

export function getAccentTheme(accentId) {
  return ACCENT_THEMES.find((a) => a.id === accentId) || ACCENT_THEMES[0];
}

export function isValidMode(mode) {
  return mode === THEME_MODES.LIGHT || mode === THEME_MODES.DARK;
}

export function isValidAccent(accent) {
  return ACCENT_THEMES.some((a) => a.id === accent);
}
