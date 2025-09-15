import type { Config } from 'tailwindcss'
import tokens from './src/styles/tokens'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: tokens.colors,
      borderRadius: tokens.radius,
      fontFamily: tokens.fontFamily,
    },
  },
  plugins: [],
} satisfies Config
