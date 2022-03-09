/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    extend: {
      colors: {
        pudark: '#2E1B0C',
        publue: '#0BCBF2',
        pured: '#FF5545',
        pubrown: '#734548',
        pubrownlight: '#816668'
      }
    }
  },
  variants: {},
  plugins: [],
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ]
}
