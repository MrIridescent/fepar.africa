/**
 * FEPAR ECOSYSTEM - Design Tokens
 * FESTAC Pan African Renaissance - Corporate Digital Presence
 * African-inspired color palette, typography, and pattern definitions
 */

// COLOR PALETTE
export const colors = {
  panAfricanGold: '#F4A800',
  panAfricanRed: '#CC0001',
  panAfricanBlack: '#1A1A1A',
  panAfricanGreen: '#009B3A',
  africanDeep: '#0B0E0A',
  africanBrown: '#2E1E12',
  africanSand: '#F4F1DE',
  africanGold: '#F4A800',
  ochre: '#F4A800',
  terracotta: '#BD563D',
  kenteRed: '#CC0001',
  panGreen: '#009B3A',
  lakeTeal: '#2A9D8F',
  copper: '#D6A66B',
  bone: '#F4F1DE',
  ivory: '#EDE4D4',
  muted: '#A8A494',
  charcoal: '#1E241D',
  slate: '#3A4036',
  success: '#009B3A',
  warning: '#F4A800',
  error: '#CC0001',
  info: '#2A9D8F',
  textPrimary: '#F4F1DE',
  textSecondary: '#B7B6A9',
  textMuted: '#8A8676',
  textGold: '#F4A800',
} as const;

// TYPOGRAPHY
export const fonts = {
  display: "'Syne', 'Trebuchet MS', sans-serif",
  body: "'Plus Jakarta Sans', 'Inter', sans-serif",
  mono: "'Space Mono', 'Courier New', monospace",
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;

export const animations = {
  durationFast: '0.2s',
  durationNormal: '0.3s',
  durationSlow: '0.5s',
  durationSlower: '0.7s',
  durationSlowest: '1s',
  easingEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easingEaseOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easingBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  easingSmooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  base: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(197, 160, 89, 0.3)',
  accent: '0 0 30px rgba(233, 168, 59, 0.4)',
} as const;

export const africanMotifs = {
  adinkra: { sankofa: 'sankofa-symbol', gyeNyame: 'gye-nyame-symbol', dwennimmen: 'dwennimmen-symbol', fawohodie: 'fawohodie-symbol', neaNonim: 'nea-onnim-no-sua-a' },
  bogolanfini: { zigzag: 'zigzag-pattern', cross: 'cross-pattern', cowry: 'cowry-shell' },
  kente: { goldStripes: 'kente-gold-stripes', redGreen: 'kente-red-green', blueHarmony: 'kente-blue-harmony' },
  ndebele: { angularGeometry: 'ndebele-angular', vibrantContrast: 'ndebele-contrast' },
} as const;

export const layout = { maxWidth: '1440px', sectionPadding: '140px 0', gapDesktop: '96px', gapTablet: '72px', gapMobile: '48px', navHeight: '88px' } as const;

export const breakpoints = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', xxl: '1536px' } as const;

export const zIndex = { hide: -1, auto: 'auto', base: 1, dropdown: 1000, sticky: 1100, fixed: 1200, modalBackdrop: 1300, modal: 1400, popover: 1500, tooltip: 1600, readingProgress: 100, header: 2000 } as const;

export const particles = { countDesktop: 80, countTablet: 40, countMobile: 20, minSize: 1, maxSize: 5, minSpeed: 0.15, maxSpeed: 0.9 } as const;

export default { colors, fonts, fontSizes, fontWeights, spacing, animations, borderRadius, shadows, africanMotifs, layout, breakpoints, zIndex, particles };
