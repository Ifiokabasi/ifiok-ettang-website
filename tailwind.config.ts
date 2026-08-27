import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d10", // page background
        paper: "#f5f5f5", // primary light text
        muted: "#b2b2b2", // secondary text
        red: "#eb5454", // primary accent (CTA / eyebrow)
        yellow: "#ffd738", // "in production" / highlight accent
        amber: "#e8a317", // "building" CTA
        nav: "#1a1a1a", // nav bar surface
        footer: "#3d3e3e", // footer surface
      },
      fontFamily: {
        // body / UI
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        // wordmark
        rocksalt: ["var(--font-rock-salt)", "cursive"],
        // decorative story headline faces (one per story card, matches Figma)
        jaro: ["var(--font-jaro)", "sans-serif"],
        joan: ["var(--font-joan)", "serif"],
        jaini: ["var(--font-jaini)", "serif"],
        karantina: ["var(--font-karantina)", "sans-serif"],
        medula: ["var(--font-medula)", "sans-serif"],
        italiana: ["var(--font-italiana)", "serif"],
        jacques: ["var(--font-jacques)", "serif"],
      },
      maxWidth: {
        content: "1220px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
