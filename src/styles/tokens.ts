export const tokens = {
  colors: {
    brand: {
      DEFAULT: '#8B5CF6',
      dark: '#7C3AED',
      light: '#A78BFA',
      accent: '#C4B5FD',
    },
    background: {
      DEFAULT: '#FFFFFF',
      muted: '#F5F5F5',
    },
    foreground: {
      DEFAULT: '#1F2937',
      muted: '#6B7280',
    },
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Poppins', 'sans-serif'],
  },
}

export type DesignTokens = typeof tokens
export default tokens
