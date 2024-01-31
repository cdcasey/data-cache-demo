import React from "react";
// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routes.tsx";
// import App from "./App.tsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root"),
);
