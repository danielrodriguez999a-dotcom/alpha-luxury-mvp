import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0F3D2E",
          deep: "#0A2A20",
          soft: "#1F4A37",
        },
        gold: {
          DEFAULT: "#B89968",
          soft: "#C9B188",
          deep: "#9C7E50",
        },
        charcoal: {
          DEFAULT: "#2E2A26",
          soft: "#4A443E",
        },
        ivory: {
          DEFAULT: "#F4EFE6",
          light: "#FAF6EF",
          warm: "#EDE5D6",
        },
        stone: {
          DEFAULT: "#C7BFB3",
          soft: "#D9D3C8",
        },
        muted: {
          DEFAULT: "#6B655E",
          soft: "#8A847D",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      maxWidth: {
        editorial: "72rem",
        prose: "38rem",
      },
      spacing: {
        section: "clamp(4rem, 9vw, 9rem)",
        "section-sm": "clamp(2.5rem, 5vw, 5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
