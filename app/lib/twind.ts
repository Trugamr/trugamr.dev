import { setup } from 'twind'
import config from '~/twind.config'

// Exporting a function instead of calling setup() directly,
// to avoid modules with side effects.
// https://remix.run/docs/en/v1/guides/constraints#no-module-side-effects
export function configure() {
  setup(config)
}
