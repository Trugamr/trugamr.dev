import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import figlet from 'figlet'

type HomeProps = {
  art: string | undefined
}

const Home: NextPage<HomeProps> = ({ art }) => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>.... .. / ---... -.--.-</title>
        <meta name="description" content="hi :)" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="bg-dark h-full w-full grid grid-rows-3 items-center justify-center">
        <div className="row-start-2">
          <pre className="text-pink text-glow font-bold select-none text-[0.2rem] md:text-[0.4rem] leading-[1.25]">
            {art}
          </pre>
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<{ art: string | undefined }> = async () => {
  const art = await new Promise<string | undefined>((resolve, reject) => {
    figlet.text('trugamr.dev', { font: 'Fraktur' }, (error, result) => {
      if (error) {
        return reject(error)
      }
      resolve(result)
    })
  })

  return {
    props: {
      art,
    },
  }
}
