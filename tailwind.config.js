/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        "primary-dark": "#1C9417",
        "primary-light": "#34d399",
        accent: "#10b981",
        "accent-dark": "#1C9417",
        "accent-cyan": "#22D3EE",
        "accent-sky": "#0EA5E9",
        "accent-blue-deep": "#0284C7",
        dark: "#0a0a0a",
        "dark-card": "#111111",
        "dark-border": "#1f1f1f",
        "text-soft": "#E0ECFF",
        "text-muted": "#8AA3C6",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
