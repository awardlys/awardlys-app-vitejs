import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Awards, Categories, Games } from "../pages";

export const route = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    errorElement: <div>Algo deu Errado!</div>,
    children: [
      {
        path: "awards",
        element: <Awards />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "games",
        element: <Games />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        Vixee!!! Não temos nada por aqui... Tenta usar "/admin"
      </div>
    ),
  },
]);
