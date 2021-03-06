import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Welcome to frontpage</h1>
          <h2>A lil continuous deployment practice</h2>
          <h2>Added title...</h2>
        </div>
      </main>
    </div>
  )
}
