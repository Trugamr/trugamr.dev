import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { css, tx } from 'twind'
import { encoded } from '~/assets/art.server'
import { colorFromDate } from '~/utils/color'

type LoaderData = {
  decoded: string
  color: ReturnType<typeof colorFromDate>
}

export const loader: LoaderFunction = () => {
  const decoded = Buffer.from(encoded, 'base64').toString('utf8')
  const data: LoaderData = {
    decoded,
    color: colorFromDate(new Date()),
  }
  return data
}

export default function IndexRoute() {
  const { decoded, color } = useLoaderData<LoaderData>()
  const hsla = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`

  return (
    <main className="h-full flex items-center justify-center p-4">
      <pre
        className={tx(
          'font-bold select-none text-[0.2rem] sm:text-[0.4rem] leading-[1.25]',
          css`
            text-shadow: 0rem 0rem 0.625rem currentColor;
            color: ${hsla};
          `,
        )}
      >
        {decoded}
      </pre>
    </main>
  )
}
