import React, { useState, useEffect } from "react"
import { Logo, Menu } from "../styles/Menu"
import { handleBgColor, smoothScroll } from "../utils/scroll"


export default function NavBar() {
    const sectionLinks = ["Sobre mim", "Habilidades", "Trabalhos", "Conhecimentos", "Contato"]
    const [open, setOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : "auto"
    }, [open])
    return (
        <Menu className={`${open && 'bg-active'}`} >
            <Logo>
                <a href="#home" onClick={smoothScroll} >
                    <span data-text="Gustavo">Gustavo</span>
                    <span data-text="Monteiro">Monteiro</span>
                </a>
            </Logo>
            <div id="hamburger-menu" onClick={() => setOpen(!open)} className={open ? 'active' : undefined} >
                <span className="bar"></span>
            </div>
            <ul className={open ? 'active' : undefined}>
                {sectionLinks.map(link => (
                    <li key={link} >
                        <a
                            href={`#${link.toLowerCase().replace(" ", "-")}`}
                            onClick={(e) => {
                                setOpen(false)
                                smoothScroll(e)
                            }}
                        >{link}</a>
                    </li>
                ))}
            </ul>
        </Menu>
    )
}