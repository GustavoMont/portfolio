import React, {useEffect} from 'react'
import Section from '../../styles/Section'
import { Card, Menu } from '../../styles/Apresentation'
import { handleBgColor, smoothScroll } from '../../utils/Apresentation'


export default function Apresentation() {
    const sectionsLinks = [
    {href: "about", text: "Sobre Mim"},
    {href: "services", text: "Serviços"},
    {href: "knowledge", text: "Conhecimentos"},
    {href: "projects", text: "Projetos"},
    {href: "contact", text: "Contatos"}
]
    useEffect(()=>{
        window.addEventListener('scroll', handleBgColor)
    })
    return (
        <Section id="home">
            <Menu className="align">
                <h1>
                    <a href="#home" onClick={(e) => smoothScroll(e)}>
                        <span data-text="Gustavo">Gustavo</span>
                        <span data-text="Monteiro">Monteiro</span>
                    </a>
                </h1>
                <ul>
                    {sectionsLinks.map((link) => (
                        <li key={link.href}>
                            <a href={`#${link.href}`} onClick={(e) => smoothScroll(e)} >{link.text}</a>
                        </li>
                    ) )}
                </ul>
            </Menu>

            <Card className="align" id="my-card">
                <p>Olá, Eu sou</p>
                <h2>Gustavo Monteiro</h2>
                <p>Desenvolvedor Front-end</p>
            </Card>

        </Section>
    )

}