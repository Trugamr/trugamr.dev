import { defineConfig } from 'twind'
import presetTailwind from '@twind/preset-tailwind'
import presetAutoprefix from '@twind/preset-autoprefix'

const config = defineConfig({
  presets: [presetTailwind(), presetAutoprefix()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#0a0a0a',
        },
      },
    },
  },
})

export default config
