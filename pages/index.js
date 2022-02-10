import React, { useEffect } from 'react'
import Head from 'next/head'
import NavBar from '../src/Components/NavBar'
import Apresentation from '../src/Sections/Apresentation';
import { handleBgColor } from '../src/utils/scroll'
import About from '../src/Sections/About'
import Faco from '../src/../src/Sections/Faco';
import Trabalhos from '../src/Sections/Trabalhos'
import Conhecimentos from '../src/Sections/Conhecimentos'
import Contato from '../src/Sections/Contato'
import GlobalStyle from '../src/styles/GlobalStyle'

export default function Home() {
  useEffect(() => {
    window.onscroll = handleBgColor
  }, [])
  return (
    <>
      <Head>
        <title>Gustavo Monteiro</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <GlobalStyle />
      <NavBar />
      <Apresentation />
      <About />
      <Faco />
      <Trabalhos />
      <Conhecimentos />
      <Contato />
    </>
  )
}
