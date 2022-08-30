import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage/Homepage";
import Menu from "pages/Menu/Menu";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

//router: permite q consiga acessar o window.location.pathname "/" 
//routes: sempre para na primeira rota que ele encontra. correspondente ao antigo switch.
//route: de fato o path completo da pagina, sao filhos do routes
