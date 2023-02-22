import { useLoaderData } from '@remix-run/react'
import { encoded } from '~/assets/art.server'
import { colorFromDate } from '~/utils/color'

export const loader = () => {
  const art = Buffer.from(encoded, 'base64').toString('utf8')
  const color = colorFromDate(new Date())
  return {
    art,
    color: color.hex(),
  }
}

export default function IndexRoute() {
  const { art, color } = useLoaderData<typeof loader>()

  return (
    <main className="flex h-full items-center justify-center p-4">
      <pre
        className="text-glow select-none text-[0.2rem] font-bold leading-[1.25] sm:text-[0.4rem]"
        style={{ color }}
      >
        {art}
      </pre>
    </main>
  )
}
