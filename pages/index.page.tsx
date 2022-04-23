import type { GetStaticProps } from 'next'
import Head from 'next/head'
import figlet from 'figlet'
import { colorFromTime } from '../utils/color'

type HomeProps = {
  art: {
    text: string | undefined
    color: string
  }
}

export default function Home({ art }: HomeProps) {
  return (
    <div className="h-full w-full">
      <Head>
        <title>.... .. / ---... -.--.-</title>
        <meta name="description" content="hi :)" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="${art.color}" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-.499-6.296l-1.298 1.296-1.203-1.204 1.298-1.296-1.298-1.296 1.203-1.204 1.298 1.296 1.296-1.296 1.203 1.204-1.297 1.296 1.297 1.296-1.202 1.204-1.297-1.296zm-7 0l-1.298 1.296-1.203-1.204 1.298-1.296-1.298-1.296 1.203-1.204 1.298 1.296 1.296-1.296 1.203 1.204-1.297 1.296 1.297 1.296-1.202 1.204-1.297-1.296z" /></svg>`}
        />
      </Head>

      <main className="grid h-full w-full grid-rows-3 items-center justify-center bg-dark">
        <div className="row-start-2">
          <pre
            className="text-glow select-none text-[0.2rem] font-bold leading-[1.25] md:text-[0.4rem]"
            style={{ color: art.color }}
          >
            {art.text}
          </pre>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const text = await new Promise<string | undefined>((resolve, reject) => {
    figlet.text('trugamr.dev', { font: 'Fraktur' }, (error, result) => {
      if (error) {
        return reject(error)
      }
      resolve(result)
    })
  })

  const color = colorFromTime({ time: new Date() })

  return {
    props: {
      art: { text, color },
    },
    revalidate: 30,
  }
}
