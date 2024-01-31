import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import { People } from "./People.tsx";
import { Starships } from "./Starships.tsx";
import { Planets } from "./Planets.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "people/:peopleId?",
        element: <People />,
      },
      {
        path: "starships/:starshipId?",
        element: <Starships />,
      },
      {
        path: "planets/:planetId?",
        element: <Planets />,
      },
    ],
  },
]);
