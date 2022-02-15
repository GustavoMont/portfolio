import React, { useEffect, useState } from "react";
import { AnimationCard, Card } from "../../styles/Apresentation";
import Section from "../../styles/Section";
import Lottie from "react-lottie-player";
import devAnimation from "./dev-animation.json";

export default function Apresentation() {
  const [vel, setVel] = useState(1);
  return (
    <Section id="home">
      <AnimationCard>
        <Lottie
          loop
          play
          speed={vel}
          animationData={devAnimation}
          onMouseEnter={() => setVel(4)}
          onMouseLeave={() => setVel(1)}
          data-barrier
        />
      </AnimationCard>
      <Card>
        <p>Hello, World! Eu sou</p>
        <h2>Gustavo Monteiro</h2>
        <p>Desenvolvedor Web</p>
      </Card>
    </Section>
  );
}
