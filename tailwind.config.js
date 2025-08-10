/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // These will be used for theme-aware colors
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        
        // Semantic data visualization colors
        positive: 'var(--color-positive)',
        negative: 'var(--color-negative)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        
        // Report-specific colors (monochrome in light, colored in dark)
        'report-positive': 'var(--color-report-positive)',
        'report-negative': 'var(--color-report-negative)',
        'report-primary': 'var(--color-report-primary)',
        'report-secondary': 'var(--color-report-secondary)',
        'report-warning': 'var(--color-report-warning)',
        'report-info': 'var(--color-report-info)',
        
        // Chart colors for data visualizations
        chart: {
          1: 'var(--color-chart-1)',
          2: 'var(--color-chart-2)',
          3: 'var(--color-chart-3)',
          4: 'var(--color-chart-4)',
          5: 'var(--color-chart-5)',
        },
      },
    },
  },
  plugins: [],
}

