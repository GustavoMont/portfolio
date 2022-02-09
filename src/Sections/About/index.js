import React, { useEffect } from 'react';
import { Grid } from '../../styles/About';
import Section from '../../styles/Section';
import { mouseIn, mouseOut } from '../../utils/About';
import lottieJson from './25323-notebook.json';
import Lottie from 'react-lottie-player';


export default function About(){

    useEffect(()=>{
        const infoContainers = document.querySelectorAll('.info')
        

        infoContainers.forEach(container => {
            container.addEventListener('mouseenter', mouseIn)
            container.addEventListener('mouseleave', mouseOut)
        })
    },[])

    return (
    <Section id="sobre-mim">
        <Grid>
            <div id="me" className="info">
                <h2>Quem sou: </h2>
                <p>
                    Sou estudante e completamente apaixonado por tecnologia. Gosto de aprender coisas novas, de me comunicar, sou bastante criativo e acredito que usando <strong>criatividade</strong>, <strong>comunicação</strong> e tecnologia é possível construir soluções e contribuir para a melhora da sociedade.
                </p>
            </div>
            <div id="studies" className="info">
                <h2>O que tenho estudado: </h2>
                <p>
                    Atualmente estou no 4° Perído no curso de SIstemas de Informação, tenho focado no estudo do desenvolvimento web, trabalhando com front-end e backend, mais focado no front-end. Aprendo fazer pequenas automações sempre que necessário e app para celular usando React-Native.
                </p>
            </div>
            <div id="animation">
                <Lottie
                        loop
                        speed={1}
                        animationData={lottieJson}
                        play
                />
            </div>
        </Grid>
      </Section>
    )

} 