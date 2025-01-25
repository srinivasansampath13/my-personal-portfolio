import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here if needed
      },
      fontFamily: {
        josefinsans: ["Josefin Sans"],
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
}

module.exports = withMT(config)
