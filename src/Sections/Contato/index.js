import Section from "../../styles/Section";
import Lottie from "react-lottie-player";
import email from "../../Animations/e-mail.json";
import linkedin from "../../Animations/linkedin.json";
import insta from "../../Animations/instagram.json";

import { useState } from "react";
import { Container, ContatoDiv } from "../../styles/Contato";

export default function Contato() {
  const [animationsState, setAnimationsState] = useState({
    email: false,
    linkedin: false,
    instagram: false,
  });
  const startAnimation = ({ target }) => {
    setAnimationsState({
      ...animationsState,
      [target.id]: true,
    });
  };
  const stopAnimation = (name) => {
    setAnimationsState({
      ...animationsState,
      [name]: false,
    });
  };
  return (
    <Section id="contato">
      <h1>Contato</h1>
      <Container>
        <ContatoDiv>
          <div className="animation" >
            <Lottie
              animationData={email}
              play={animationsState.email}
              id="email"
              onMouseEnter={startAnimation}
              onLoopComplete={(e) => stopAnimation("email")}
            />
            <h3>E-mail</h3>
            <p>lgmluisgm@gmail.com</p>
          </div>
          <hr />
          <a href="mailto:lgmluisgm@gmail.com" >Contactar Por email</a>
        </ContatoDiv>
        <ContatoDiv>
          <div className="animation" >
            <Lottie
              animationData={linkedin}
              play={animationsState.linkedin}
              id="linkedin"
              onMouseEnter={startAnimation}
              onLoopComplete={(e) => stopAnimation("linkedin")}
            />
            <h3>Linkedin</h3>
            <p>Luis Gustavo</p>
          </div>
          <hr />
          <a href="https://linkedin.com/in/luis-gustavo-monteiro" target='_blank' rel="noreferrer" >Contactar pelo Linkedin</a>
        </ContatoDiv>
        <ContatoDiv>
          <div className="animation" >
            <Lottie
              animationData={insta}
              play={animationsState.instagram}
              id="instagram"
              onMouseEnter={startAnimation}
              onLoopComplete={(e) => stopAnimation("instagram")}
            />
            <h3>Instagram</h3>
            <p>@gust_mont</p>
          </div>
          <hr />
          <a href="https://instagram.com/gust_mont" target='_blank' rel="noreferrer" >Contactar pelo Instagram</a>
        </ContatoDiv>
      </Container>
    </Section>
  );
}
