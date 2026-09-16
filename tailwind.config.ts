import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cei: {
          navy: "#0A2342",
          teal: "#147266",
          terracotta: "#C85A44",
          gold: "#D4AF37",
          light: "#F8FAFC",
          darkText: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
