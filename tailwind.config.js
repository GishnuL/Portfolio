/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF7',
          100: '#FAF7F2', // Primary Warm Off-White / Ivory
          200: '#F4EFEA',
          300: '#E9E2D8', // Secondary Neutral
          400: '#DCD4C8',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E2E1DF',
          300: '#8C8680',
          500: '#5C5854', // Muted text
          700: '#2F2D2A',
          900: '#1A1918', // Primary Deep Charcoal
          950: '#11100F',
        },
        terracotta: {
          50: '#FDF4F1',
          100: '#FBE6E0',
          200: '#F6C8BC',
          300: '#EE9F8B',
          400: '#E57B60',
          500: '#D95F3F', // Primary Accent
          600: '#C24827',
          700: '#A1371B',
          800: '#832E18',
          900: '#6C2A18',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        signature: ['"Great Vibes"', 'cursive'],
        allura: ['"Allura"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 25, 24, 0.04), 0 2px 6px -1px rgba(26, 25, 24, 0.02)',
        'card': '0 10px 30px -4px rgba(26, 25, 24, 0.06), 0 4px 10px -2px rgba(26, 25, 24, 0.03)',
        'elevated': '0 20px 40px -10px rgba(26, 25, 24, 0.08), 0 8px 16px -4px rgba(26, 25, 24, 0.03)',
        'terracotta-glow': '0 10px 30px -5px rgba(217, 95, 63, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
