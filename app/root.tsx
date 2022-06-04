import type { MetaFunction, LinksFunction } from '@remix-run/server-runtime'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { tx } from 'twind'
import ThemeProvider, { Theme, useTheme } from '~/providers/theme.provider'
import type { ExternalScriptsFunction } from 'remix-utils'
import { ExternalScripts } from 'remix-utils'

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: '.... .. / ---... -.--.-',
    description: "trugamr's little corner of the internet x_x",
  }
}

export const links: LinksFunction = () => {
  return [{ rel: 'icon', href: '/favicon.ico' }]
}

export const scripts: ExternalScriptsFunction = () => {
  return [
    {
      async: true,
      defer: true,
      'data-website-id': '175206b1-64ae-4da5-9a2e-0ff7945bfe27',
      'data-domains': 'trugamr.dev',
      src: 'https://umami.trugamr.dev/umami.js',
    },
  ]
}

export const handle = { scripts }

function App() {
  const [theme] = useTheme()
  return (
    <html lang="en" className={tx(theme, 'h-full flex')}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex-grow bg-white text-coal-900 dark:bg-coal-900 dark:text-white">
        <Outlet />
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  return (
    <ThemeProvider theme={Theme.Dark}>
      <App />
    </ThemeProvider>
  )
}
