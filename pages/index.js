import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
     <>

     <Head>
      <title> Página Principal </title>
      <meta name="keywords" content="Roupas, calçados, boné"></meta>
      <meta name="description" content="loja de roupas"></meta>
     </Head>

      <div>
        <h1 className={styles.title}>Hello World</h1>
        <Image src="/images/saitama.jpeg" alt="saitama" height="200" width="200"/>
      </div>
     </>
  )
}
