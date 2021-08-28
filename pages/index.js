import style from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'

import Header from './blocks/home/header'
import About from './blocks/home/about'
import Stages from './blocks/home/stages'
import Capabilities from './blocks/home/capabilities'
import Prices from './blocks/home/prices'
import Contacts from './blocks/home/contacts'
import Footer from './blocks/home/footer'

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>enterprise-optimization.for-all.world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main className={style.Main}>
        <About />
        <Stages />
        <Capabilities />
        <Prices />
        <Contacts />
        <Footer />
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
