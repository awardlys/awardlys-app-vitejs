import "./style.css";

export function Content() {
  return (
    <div className="content-container">
      <div className="logo" />
      <div className="description">
        <img src="./award-logo.png" alt="" />
        <div>
          <h2>Sobre o Projeto</h2>
          <p>
            O Awardlys App é uma aplicação web construída com{" "}
            <strong>Vitejs</strong> e <strong> Ant Design</strong>,
            proporcionando uma experiência dinâmica e elegante para os usuários
            votarem nas melhores categorias.
          </p>
        </div>
      </div>
    </div>
  );
}
