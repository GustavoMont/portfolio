import React, { useEffect } from "react"
import { Logo, Menu } from "../styles/Menu"
import { smoothScroll } from "../utils/scroll"

export default function NavBar() {
    const sectionLinks = ["Sobre mim", "Habilidades", "Trabalhos", "Conhecimentos", "Contato"]
    return (
        <Menu className="align" >
            <Logo>
                <a href="#home" onClick={smoothScroll} >
                    <span data-text="Gustavo">Gustavo</span>
                    <span data-text="Monteiro">Monteiro</span>
                </a>
            </Logo>
            <ul>
                {sectionLinks.map(link => (
                    <li key={link} >
                        <a 
                            href={`#${link.toLowerCase().replace(" ", "-")}`} 
                            onClick={smoothScroll}
                            >{link}</a>
                    </li>
                ))}
            </ul>
        </Menu>
    )
}