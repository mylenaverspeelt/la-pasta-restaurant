//arquivo que faz link com o html, renderizando o app
import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Homepage from "pages/Homepage/Homepage";
import Menu from "pages/Menu/Menu";
import Header from "pages/Header/Header";

const currentComponent = window.location.pathname === "/" ?<Homepage /> : <Menu />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <Header />
    {currentComponent}
  </React.StrictMode>
);

