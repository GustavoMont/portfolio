import React from 'react'
import Section from '../../styles/Section'
import { Menu } from '../../styles/Apresentation'


export default function Apresentation() {
    const links = document.querySelectorAll("#home a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    return (
        <Section id="home">
            <Menu className="align">
                <h1>
                    <a href="#home">
                        <span data-text="Gustavo">Gustavo</span>
                        <span data-text="Monteiro">Monteiro</span>
                    </a>
                </h1>
                <ul>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#knowledge">Conhecimentos</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact" >Contate-me</a></li>
                </ul>
            </Menu>


        </Section>
    )

}