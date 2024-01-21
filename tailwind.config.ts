import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: "var(--font-montserrat)",
      notojp: "var(--font-notojp)",
    },
    extend: {
      colors: {
        bg: "#EBF0FF",
        baseblack: "#313238",
      },
    },
  },
  plugins: [],
};
export default config;
