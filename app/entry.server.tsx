import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import { inline } from 'twind'
import { configure } from '~/lib/twind'

// Configure twind
configure()

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  )

  // Generate and inject styles
  markup = inline(markup)

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
