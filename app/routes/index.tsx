import { useLoaderData } from '@remix-run/react'
import { encoded } from '~/assets/art.server'
import { colorFromDate } from '~/utils/color'

export const loader = () => {
  const art = Buffer.from(encoded, 'base64').toString('utf8')
  return {
    art,
    color: colorFromDate(new Date()),
  }
}

export default function IndexRoute() {
  const { art, color } = useLoaderData<typeof loader>()
  const hsla = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`

  return (
    <main className="flex h-full items-center justify-center p-4">
      <pre
        className="text-glow select-none text-[0.2rem] font-bold leading-[1.25] sm:text-[0.4rem]"
        style={{ color: hsla }}
      >
        {art}
      </pre>
    </main>
  )
}
