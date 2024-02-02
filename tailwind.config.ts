import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3f7953",
        secondary: "#6EC6AD",
        tertiary: "#EDB135",
        quaternary: "#eff6f0",
      },
      backgroundImage: {
        "food-background": "url('/stub/stub-food.png')",
      },
      colors: {
        primary: "#3f7953",
        secondary: "#6EC6AD",
        tertiary: "#EDB135",
        quaternary: "#eff6f0",
      },
    },
  },
  plugins: [],
};
export default config;
