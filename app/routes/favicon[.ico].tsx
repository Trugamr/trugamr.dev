import { renderToStaticMarkup } from 'react-dom/server'
import CrossEyesEmote from '~/components/icons/cross-eyes-emote'
import { colorFromDate } from '~/utils/color'

export const loader = () => {
  const color = colorFromDate(new Date())
  const icon = renderToStaticMarkup(<CrossEyesEmote color={color.hex()} />)
  return new Response(icon, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache',
    },
  })
}
