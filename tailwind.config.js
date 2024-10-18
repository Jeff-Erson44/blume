/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mb': '375px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [
    // aspect-ratio plugin
    require('@tailwindcss/aspect-ratio'),
  ],
}
