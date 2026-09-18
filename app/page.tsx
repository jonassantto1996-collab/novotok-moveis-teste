const environments = [
  ["Cozinhas", "https://i.pinimg.com/originals/5d/2f/b8/5d2fb87f8c6aacb1d930e01e401f8a05.jpg"],
  ["Closets", "https://www.dallasprocloset.com/assets/images/resources/about-img.webp"],
  ["Salas", "https://images.squarespace-cdn.com/content/v1/687fa9a5af38684efff965dd/a370cf48-6c92-4696-bb66-bda00a6c84b0/custom-built-in-entertainment-center-florida.jpeg"],
  ["Quartos", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85"],
  ["Área gourmet", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"],
  ["Comercial", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"],
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
          <p>Do primeiro desenho ao último detalhe, cada ambiente nasce para unir estética, funcionalidade e identidade.</p>
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

      <section className="detailsSection">
        <div className="detailsImage" />
        <div className="detailsCopy">
          <p className="eyebrow dark">DETALHES & ACABAMENTOS</p>
          <h2>O alto padrão aparece onde poucos olham.</h2>
          <p>Texturas, iluminação, encaixes e proporções trabalham juntos para transformar marcenaria em arquitetura de interiores.</p>
          <div className="detailTags"><span>Acabamentos</span><span>Iluminação</span><span>Funcionalidade</span><span>Precisão</span></div>
        </div>
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

      </section>

      <ProjectForm />

      <section className="finalCta">
        <div>
          <p className="eyebrow">NOVOTOK MÓVEIS PLANEJADOS</p>
          <h2>Seu próximo ambiente<br />começa com um projeto.</h2>
          <p>Fale com a Novotok e dê o primeiro passo para transformar seu espaço.</p>
          <a href="#orcamento">Começar meu projeto →</a>
        </div>
      </section>

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
