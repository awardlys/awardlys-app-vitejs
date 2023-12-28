import { Link } from "react-router-dom";
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
            <strong>
              <Link to={"https://vitejs.dev"} target="_blank">
                Vitejs
              </Link>
            </strong>{" "}
            e{" "}
            <strong>
              {" "}
              <Link to={"https://ant.design"} target="_blank">
                Ant Design
              </Link>
            </strong>
            , proporcionando uma experiência dinâmica e elegante para os
            usuários votarem nas melhores categorias.
          </p>
        </div>
      </div>
    </div>
  );
}
