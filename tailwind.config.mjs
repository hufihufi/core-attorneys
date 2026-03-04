/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#f8b500',
        'accent-dark': '#d69e00',
        text: '#333333',
        'bg-light': '#eeeeee',
        'bg-dark': '#5c636e',
        'bg-darker': '#444b54',
      },
      fontFamily: {
        sans: ['Spinnaker', 'system-ui', 'sans-serif'],
        heading: ['Arimo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            fontFamily: 'Spinnaker, system-ui, sans-serif',
            fontSize: '18px',
            h1: {
              fontFamily: 'Arimo, system-ui, sans-serif',
              fontSize: '48px',
              color: '#333333',
            },
            h2: {
              fontFamily: 'Arimo, system-ui, sans-serif',
              fontSize: '36px',
              color: '#333333',
            },
            h3: {
              fontFamily: 'Arimo, system-ui, sans-serif',
              fontSize: '32px',
              color: '#333333',
            },
            h4: {
              fontFamily: 'Arimo, system-ui, sans-serif',
              fontSize: '28px',
              color: '#333333',
            },
            a: {
              color: '#f8b500',
              '&:hover': {
                color: '#d69e00',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
