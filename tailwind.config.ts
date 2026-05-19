import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["0.98rem", { lineHeight: "1.5" }],
        base: ["1.11rem", { lineHeight: "1.65" }],
        lg: ["1.2rem", { lineHeight: "1.65" }],
      },
      colors: {
        flyer: {
          bg: "#f5ecff",
          lilac: "#bb8df5",
          lavender: "#9356dd",
          plum: "#3a1454",
          pink: "#ff92ca",
          soft: "#e9d6ff",
          cloud: "#fff7ff",
          ink: "#251235",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(147, 75, 194, 0.35)",
        card: "0 16px 40px rgba(90, 43, 136, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
