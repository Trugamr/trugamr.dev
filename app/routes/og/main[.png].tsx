import fs from 'node:fs/promises'
import path from 'node:path'
import satori from 'satori'
import { renderAsync } from '@resvg/resvg-js'
import { encoded } from '~/assets/art.server'
import { colorFromDate } from '~/utils/color'
import { hoursToSeconds } from 'date-fns'

export async function loader() {
  const art = Buffer.from(encoded, 'base64').toString('utf8')
  const color = colorFromDate(new Date())

  const poppins = await fs.readFile(
    path.resolve(
      'public',
      'fonts',
      'noto-sans-mono',
      'noto-sans-mono-bold.ttf',
    ),
  )

  const svg = await satori(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        background: '#0a0a0a',
        color: color.hex(),
      }}
    >
      <pre
        style={{
          fontSize: 8,
          lineHeight: 1.25,
          textShadow: '0px 0px 12px currentColor',
        }}
      >
        {art}
      </pre>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Poppins',
          data: poppins,
          weight: 700,
        },
      ],
    },
  )

  const rendered = await renderAsync(svg)
  const png = rendered.asPng()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'inline; filename="main.png"',
      'Cache-Control': `public, immutable, no-transform, max-age=${hoursToSeconds(
        6,
      )}`,
      'Content-Length': png.byteLength.toString(),
    },
  })
}
