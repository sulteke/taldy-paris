import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/screens/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px mobile
        md: "2rem", // 32px tablet
        lg: "4rem", // 64px desktop
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        teal: {
          900: "#1C6B64", // primary / header / buttons
          600: "#2F8F86", // links / hover
          100: "#E8F3F1", // section tint bg
        },
        gold: {
          600: "#C9A227", // dividers, underlines, badges
          100: "#F6EDD2", // badge bg
        },
        terracotta: {
          600: "#C2773D", // sparing accent only
        },
        cream: {
          50: "#FBF8F2", // page bg
        },
        charcoal: {
          900: "#232220", // text
        },
        whatsapp: "#25D366",
        error: {
          600: "#C0392B",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // role-based scale from the brand spec (size / line-height)
        "display": ["3.5rem", { lineHeight: "4rem", fontWeight: "700" }], // 56/64
        "h2": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }], // 40/48
        "h3": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }], // 28/36
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }], // 18/28
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        // 4px base unit scale
        "18": "4.5rem", // 72
        "30": "7.5rem", // 120
        "40": "10rem", // 160
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 32px rgba(0,0,0,0.12)",
        header: "0 2px 12px rgba(28,107,100,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "ken-burns": "ken-burns 18s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
