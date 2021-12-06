import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        defer
        data-website-id="175206b1-64ae-4da5-9a2e-0ff7945bfe27"
        src="https://umami.trugamr.dev/umami.js"
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
