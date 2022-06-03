import { defineConfig } from 'twind'
import presetTailwind from '@twind/preset-tailwind'
import presetAutoprefix from '@twind/preset-autoprefix'

const config = defineConfig({
  presets: [presetTailwind(), presetAutoprefix()],
  darkMode: 'class',
})

export default config
