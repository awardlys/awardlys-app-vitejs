import { Link } from "react-router-dom";
import "./style.css";

export function Content() {
  return (
    <div className="content-container">
      <div className="overlay">
        <div className="description">
          <div>
            <h2>Sobre o Projeto</h2>
            <p>
              O Awardlys App é uma aplicação web construída com{" "}
              <Link className="link" to={"https://vitejs.dev"} target="_blank">
                Vitejs
              </Link>{" "}
              e{" "}
              <Link className="link" to={"https://ant.design"} target="_blank">
                Ant Design
              </Link>
              , proporcionando uma experiência dinâmica e elegante para os
              usuários votarem nas melhores categorias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
