import type { Config } from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
      extend: {
        fontFamily: {
          orbitron: ['Oxanium', 'sans-serif','Inter'],
        },
      },
    },
  plugins: [scrollbar],
}

export default config
