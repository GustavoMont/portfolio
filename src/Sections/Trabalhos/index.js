/* eslint-disable @next/next/no-img-element */
import { FlexContainer } from "../../styles/GlobalStyle";
import Section from "../../styles/Section";
import { Info, Project, ProjectBtn, Screen } from "../../styles/Trabalho";

export default function Trabalhos({ content }) {
  return (
    <Section id="trabalhos">
      <h1>Trabalhos</h1>
      <FlexContainer>
        {content.map((projeto, index) => {
          if (index > 5) {
            return;
          }
          return (
            <Project key={projeto.id}>
              <Screen>
                <div className="project-screen">
                  <img
                    src={projeto.thumbnail.url}
                    alt={projeto.thumbnail.title}
                  />
                </div>
              </Screen>
              <Info>
                <h3>{projeto.title}</h3>
                <p>{projeto.description}</p>
                <hr />
                <ProjectBtn
                  color={"--dark-purple"}
                  target="_blank"
                  rel="noreferrer"
                  href={projeto.linkProducao}
                >
                  Visitar Projeto
                </ProjectBtn>
                <ProjectBtn
                  target="_blank"
                  rel="noreferrer"
                  href={projeto.repoLink}
                >
                  Ver o Código
                </ProjectBtn>
              </Info>
            </Project>
          );
        })}
      </FlexContainer>
    </Section>
  );
}
