import React, { useEffect, useState } from 'react'
import Section from '../../styles/Section'
import { Card, Menu, Animation, Logo } from '../../styles/Apresentation'
import { handleBgColor, smoothScroll } from '../../utils/Apresentation'
import lottieJson from './dev-animation.json'
import Lottie from 'react-lottie-player'

export default function Apresentation() {

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
        </Section>
    )

}