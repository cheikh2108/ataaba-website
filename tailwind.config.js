/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: '#09090B',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)', // Strong ease-out
        'drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',  // iOS-like
      },
      transitionDuration: {
        '160': '160ms', // Button press feedback
      },
      animation: {
        'logo-marquee': 'logo-marquee 26s linear infinite',
        'logo-scan': 'logo-scan 4.5s ease-in-out infinite',
        'cta-border-spin': 'cta-border-spin 4s linear infinite',
        'cta-glow': 'cta-glow 3.2s ease-in-out infinite',
        'card-status-pulse': 'card-status-pulse 2.1s ease-in-out infinite',
        'card-border-scan': 'card-border-scan 5.8s ease-in-out infinite',
        'orbital-drift': 'orbital-drift 12s ease-in-out infinite',
        'orbital-dash': 'orbital-dash 9s linear infinite',
        'orbital-pulse': 'orbital-pulse 5.2s ease-in-out infinite',
      },
      keyframes: {
        'logo-marquee': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        'logo-scan': {
          '0%, 100%': { transform: 'translateX(-120%)', opacity: '0' },
          '20%, 80%': { opacity: '1' },
          '100%': { transform: 'translateX(120%)', opacity: '0' },
        },
        'cta-border-spin': {
          'to': { transform: 'rotate(360deg)' },
        },
        'cta-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(34, 211, 238, 0), 0 0 18px rgba(34, 211, 238, 0.08)'
          },
          '50%': {
            boxShadow: '0 0 24px rgba(34, 211, 238, 0.18), 0 0 42px rgba(34, 211, 238, 0.08)'
          },
        },
        'card-status-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
            opacity: '0.85'
          },
          '50%': {
            transform: 'scale(1.55)',
            boxShadow: '0 0 18px rgba(34, 211, 238, 0.95), 0 0 34px rgba(34, 211, 238, 0.25)',
            opacity: '1'
          },
        },
        'card-border-scan': {
          '0%, 72%, 100%': {
            transform: 'translateX(-140%) skewX(-18deg)',
            opacity: '0'
          },
          '12%, 55%': { opacity: '1' },
          '70%': {
            transform: 'translateX(140%) skewX(-18deg)',
            opacity: '0'
          },
        },
        'orbital-drift': {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0) scale(1)',
            opacity: '0.48'
          },
          '50%': {
            transform: 'translate3d(-1.2%, 0.8%, 0) scale(1.02)',
            opacity: '0.72'
          },
        },
        'orbital-dash': {
          'to': { strokeDashoffset: '-240' },
        },
        'orbital-pulse': {
          '0%, 100%': { opacity: '0.18', transform: 'scale(0.97)' },
          '50%': { opacity: '0.56', transform: 'scale(1.035)' },
        },
      },
    },
  },
  plugins: [],
}
