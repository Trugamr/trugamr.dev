import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import figlet from 'figlet'

type HomeProps = {
  art: string | undefined
}

const Home: NextPage<HomeProps> = ({ art }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hi :)</title>
        <meta name="description" content="hi :)" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <pre className={styles.art}>{art}</pre>
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
