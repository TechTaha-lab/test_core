/* tailwind.config.js */

module.exports = {
  content: [
          "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: false,
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@aegov/design-system'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
