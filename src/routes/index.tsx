import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Awards, Categories, Games, Home } from "../pages";
import { AwardsAttach } from "../pages/awards/[id]";

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
      {
        path: "awards/:awardId",
        element: <AwardsAttach />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
]);
