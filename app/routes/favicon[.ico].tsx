import { renderToStaticMarkup } from 'react-dom/server'
import CrossEyesEmote from '~/components/icons/cross-eyes-emote'
import { colorFromDate } from '~/utils/color'

export const loader = () => {
  const color = colorFromDate(new Date())
  const hsla = `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${color.alpha})`
  const icon = renderToStaticMarkup(<CrossEyesEmote color={hsla} />)
  return new Response(icon, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache',
    },
  })
}
