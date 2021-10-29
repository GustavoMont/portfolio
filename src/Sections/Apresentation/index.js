import React, { useEffect, useState } from 'react'
import Section from '../../styles/Section'
import { Card, Menu, Animation, Logo } from '../../styles/Apresentation'
import { handleBgColor, smoothScroll } from '../../utils/Apresentation'
import lottieJson from './dev-animation.json'
import Lottie from 'react-lottie-player'

export default function Apresentation() {

    const sectionsLinks = [
        { href: "about", text: "Sobre Mim" },
        { href: "services", text: "Serviços" },
        { href: "knowledge", text: "Conhecimentos" },
        { href: "projects", text: "Projetos" },
        { href: "contact", text: "Contatos" }
    ]
    const [speed, setSpeed] = useState(1)
    useEffect(() => {
        window.addEventListener('scroll', handleBgColor)
    })
    return (
        <Section id="home">
            <Menu className="align">
                <Logo>
                    <a href="#home" onClick={(e) => smoothScroll(e)}>
                        <span data-text="Gustavo">Gustavo</span>
                        <span data-text="Monteiro">Monteiro</span>
                    </a>
                </Logo>
                <ul>
                    {sectionsLinks.map((link) => (
                        <li key={link.href}>
                            <a href={`#${link.href}`} onClick={(e) => smoothScroll(e)} >{link.text}</a>
                        </li>
                    ))}
                </ul>
            </Menu>
            <Animation id="animation">
                <Lottie
                    onMouseOver={() => {setSpeed(2.5)}}
                    onMouseOut={() => {setSpeed(1)}}
                    loop
                    speed={speed}
                    animationData={lottieJson}
                    play
                />
            </Animation>



            <Card className="align">
                <p>Olá, Eu sou</p>
                <h2>Gustavo Monteiro</h2>
                <p>Desenvolvedor Front-end</p>
            </Card>

        </Section>
    )

}