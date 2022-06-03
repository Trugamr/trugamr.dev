import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import { configure } from '~/lib/twind'

// Configure twind
configure()

hydrate(<RemixBrowser />, document)
