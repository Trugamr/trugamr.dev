import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
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
    <main className="flex h-full items-center justify-center p-4">
      <pre
        className="text-glow select-none text-[0.2rem] font-bold leading-[1.25] sm:text-[0.4rem]"
        style={{ color: hsla }}
      >
        {decoded}
      </pre>
    </main>
  )
}
