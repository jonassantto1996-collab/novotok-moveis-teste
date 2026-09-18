const environments = [
  ["Cozinhas", "https://i.pinimg.com/originals/5d/2f/b8/5d2fb87f8c6aacb1d930e01e401f8a05.jpg"],
  ["Closets", "https://www.dallasprocloset.com/assets/images/resources/about-img.webp"],
  ["Salas", "https://images.squarespace-cdn.com/content/v1/687fa9a5af38684efff965dd/a370cf48-6c92-4696-bb66-bda00a6c84b0/custom-built-in-entertainment-center-florida.jpeg"],
];

const steps = [
  ["01", "Conversa", "Entendemos seu ambiente, sua rotina e o que você espera do projeto."],
  ["02", "Planejamento", "Organizamos medidas, necessidades e referências em uma solução coerente."],
  ["03", "Projeto", "Você visualiza a proposta antes de transformar o ambiente."],
  ["04", "Produção", "O projeto segue para execução com atenção aos detalhes."],
  ["05", "Instalação", "A entrega finaliza a transformação do espaço."],
];

import ProjectForm from "../components/ProjectForm";

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Novotok">
          <strong>Novotok</strong>
          <span>MÓVEIS PLANEJADOS</span>
        </a>
        <nav>
          <a href="#ambientes">Ambientes</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Como funciona</a>
        </nav>
        <a className="headerCta" href="https://api.whatsapp.com/send/?phone=94992330654&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer">Solicitar projeto</a>
      </header>

      <section id="top" className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">MÓVEIS PLANEJADOS • ALTO PADRÃO</p>
          <h1>Ambientes únicos,<br />planejados para você.</h1>
          <p className="heroText">Projetos que combinam estética, funcionalidade e precisão em cada detalhe.</p>
          <div className="actions">
            <a className="primary" href="https://api.whatsapp.com/send/?phone=94992330654&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer">Quero meu projeto</a>
            <a className="secondary" href="#projetos">Conhecer projetos</a>
          </div>
        </div>
        <div className="scrollHint">DESCUBRA ↓</div>
      </section>

      <section id="ambientes" className="section light">
        <div className="sectionIntro">
          <p className="eyebrow dark">AMBIENTES</p>
          <h2>Planejado para cada espaço da sua vida.</h2>
          <p>Uma arquitetura visual pensada para destacar o ambiente antes do móvel isolado.</p>
        </div>
        <div className="editorialGrid">
          {environments.map(([name, image], i) => (
            <article className={"envCard env" + i} key={name} style={{backgroundImage:`linear-gradient(180deg,transparent 45%,rgba(0,0,0,.72)),url("${image}")`}}>
              <span>0{i+1}</span>
              <h3>{name}</h3>
              <a href="#orcamento">Explorar ambiente →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="section darkSection">
        <div className="splitTitle">
          <div>
            <p className="eyebrow">PROJETOS NOVOTOK</p>
            <h2>Espaços pensados<br />até o último detalhe.</h2>
          </div>
          <p>O portfólio será o centro da percepção de valor da marca. No protótipo, usamos imagens de referência apenas para validar a direção visual.</p>
        </div>
        <div className="projectFeature">
          <div className="projectImage" />
          <div className="projectCopy">
            <span>COZINHA • CONCEITO</span>
            <h3>Marcenaria que organiza o espaço e também define sua identidade.</h3>
            <p>Linhas limpas, materiais quentes, iluminação integrada e soluções sob medida.</p>
            <a href="https://api.whatsapp.com/send/?phone=94992330654&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer">Iniciar projeto →</a>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow dark">NOVOTOK</p>
        <h2>Não é apenas sobre móveis.<br />É sobre criar um ambiente que faça sentido para você.</h2>
        <p>Cada projeto deve responder à rotina, proporção, armazenamento, estética e circulação do espaço.</p>
      </section>

      <section id="processo" className="section processSection">
        <div className="sectionIntro">
          <p className="eyebrow dark">PROCESSO</p>
          <h2>Como seu projeto ganha forma.</h2>
        </div>
        <div className="steps">
          {steps.map(([n,title,text]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="note">Fluxo provisório para o protótipo. O processo comercial real da empresa deve ser confirmado antes da publicação.</p>
      </section>

      <ProjectForm />

      <footer>
        <div className="brand footerBrand"><strong>Novotok</strong><span>MÓVEIS PLANEJADOS</span></div>
        <p>Exclusividade • Sofisticação • Precisão</p>
        <div className="footerLinks">
          <a href="https://api.whatsapp.com/send/?phone=94992330654&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer">WhatsApp 1</a>
          <a href="https://api.whatsapp.com/send/?phone=94992014458&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer">WhatsApp 2</a>
          <a href="https://www.instagram.com/novotokmoveis___planejados_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
      </footer>
      <a className="whatsappFloat" href="https://api.whatsapp.com/send/?phone=94992330654&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" aria-label="Falar com a Novotok no WhatsApp">WhatsApp</a>
    </main>
  );
}
