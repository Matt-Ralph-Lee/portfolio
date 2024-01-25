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
        bgblack: "#0F1315",
        baseblack: "#313238",
        contentbase: "#F1F5FF",
      },
      boxShadow: {
        "3xl": "0 0 32px 0 rgba(178, 178, 178, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
