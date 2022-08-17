import { startTransition, StrictMode } from 'react'
import { RemixBrowser } from '@remix-run/react'
import { hydrateRoot } from 'react-dom/client'
import { configure } from '~/lib/twind'

// Configure twind
configure()

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  window.setTimeout(hydrate, 1)
}
