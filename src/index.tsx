//arquivo que faz link com o html, renderizando o app
import React from "react";
//arquivo que vai renderizar toda a pagina, nesse caso renderiza o componente router

import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Router from "./routes.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

