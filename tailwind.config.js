/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  future: {
    // Only apply hover: styles on devices that actually support hover, so
    // touch devices don't keep a card "stuck" in its hover state.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

