import Section from "../../styles/Section";
import { ListaServicos, Servico } from "../../styles/Faco";

export default function Faco({content}) {
  return (
    <Section id="o-que-faco">
      <h2>Serviços</h2>
      <ListaServicos>
        {/* <li>
          <Servico>
            <div className="header">
              <h3>UI Design</h3>
            </div>
            <hr />
            <div className="explain">
              <p>
                Faço o design de telas para sua aplicação sempre zelando para
                que o usuário tenha a melhor experiência possível.
              </p>
            </div>
          </Servico>
        </li>
        <li>
          <Servico>
            <div className="header">
              <h3>Front-end</h3>
            </div>
            <hr />
            <div className="explain">
              <p>
                Construo toda a parte visual do seu site/aplicativo fiel ao
                design proposto deixando não só bonito mas perfomático.
              </p>
            </div>
          </Servico>
        </li>
        <li>
          <Servico>
            <div className="header">
              <h3>Backend</h3>
            </div>

            <hr />
            <div className="explain">
              <p>
                Desenvolvo API&apos;s que vão se comunicar de maneira segura e
                rápida ao seu banco de dados eque poderão ser facilmente
                consumidas em sua aplicação.
              </p>
            </div>
          </Servico>
        </li>
        <li>
          <Servico>
            <div className="header">
              <h3>Full-stack</h3>
            </div>

            <hr />
            <div className="explain">
              <p>
                Construo aplicações completas, aqui junto o desenvolvimento
                backend e front-end e assim faço tanto a parte visual quanto a
                parte funcional do seu site/aplicativo.
              </p>
            </div>
          </Servico>
        </li> */}
          {content.map(servico =>(
            <li key={servico.id}>
              <Servico>
              <div className="header">
                <h3>{servico.title}</h3>
              </div>

              <hr />
              <div className="explain">
                <p>
                  {servico.description}
                </p>
              </div>
            </Servico>
            </li>
          ))}
      </ListaServicos>
    </Section>
  );
}
