import type { MetaFunction, LinksFunction, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import ThemeProvider, { Theme, useTheme } from '~/providers/theme.provider'
import type { ExternalScriptsFunction } from 'remix-utils'
import { ExternalScripts } from 'remix-utils'
import styles from '~/styles/app.css'
import { cx } from 'class-variance-authority'
import { getSiteUrl } from '~/utils/general'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const ogImageUrl = new URL('./og/main.png', data.requestInfo.origin)
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: '.... .. / ---... -.--.-',
    description: "trugamr's little corner on the internet x_x",
    'og:image': ogImageUrl.href,
  }
}

export const loader = ({ request }: LoaderArgs) => {
  return json({
    requestInfo: {
      origin: getSiteUrl(request),
    },
  })
}

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: styles },
  ]
}

export const scripts: ExternalScriptsFunction = () => {
  return [
    {
      async: true,
      defer: true,
      'data-website-id': '175206b1-64ae-4da5-9a2e-0ff7945bfe27',
      'data-domains': 'trugamr.dev',
      src: 'https://umami.trugamr.dev/script.js',
    },
  ]
}

export const handle = { scripts }

function App() {
  const [theme] = useTheme()
  return (
    <html lang="en" className={cx(theme, 'flex h-full')}>
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
