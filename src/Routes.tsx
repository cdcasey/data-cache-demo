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
        path: "people/:id?",
        element: <People />,
      },
      {
        path: "starships/:id?",
        element: <Starships />,
      },
      {
        path: "planets/:id?",
        element: <Planets />,
      },
    ],
  },
]);
