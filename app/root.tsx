import type { MetaFunction } from '@remix-run/server-runtime'
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

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    title: '.... .. / ---... -.--.-',
    viewport: 'width=device-width,initial-scale=1',
  }
}

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
