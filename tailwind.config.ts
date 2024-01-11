import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'emerald': '#64ffda',
      'slate': '#8892b0',
      'bright-slate': '#ccd6f6',
      'navy': '#0a192f',
      'light-navy': '#112240',
    },
  },
  plugins: [],
};

module.exports = withMT(config);
export default config;
