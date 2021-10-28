import Head from 'next/head'
import Apresentation from '../src/Sections/Apresentation'
import GlobalStyle from '../src/styles/GlobalStyle'
import Section from '../src/styles/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gustavo Monteiro</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <GlobalStyle />
      <Apresentation />
      <Section id="about">
        <h1>Hello, World! About</h1>
      </Section>
      <Section id="services">
        <h1>Hello, World! Services</h1>
      </Section>
      <Section id="knowledge">
        <h1>Hello, World! knowledge</h1>
      </Section>
      <Section id="projects">
        <h1>Hello, World! Projects</h1>
      </Section>
      <Section id="contact">
        <h1>Hello, World! Contact</h1>
      </Section>
    </> 
  )
}
