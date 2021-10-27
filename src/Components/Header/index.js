import React from 'react'
import Section from '../../styles/Section'
import { Menu } from '../../styles/Header'


export default function Header() {

    return (
        <Section>
            <Menu>
                <h1><span>G</span> <span>M</span></h1>
                <ul>
                    <li>Sobre Mim</li>
                    <li>Serviços</li>
                    <li>Conhecimentos</li>
                    <li>Projetos</li>
                    <li>Contate-me</li>
                </ul>
            </Menu>
        </Section>
    )

}