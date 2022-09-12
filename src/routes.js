// esse arquivo que vai ser renderizado no html da pagina.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage/Homepage";
import Menu from "pages/Menu/Menu";
import About from "pages/About/About";
import Header from "components/Header/Header";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";
import Dish from "pages/Dish/Dish";

export default function AppRouter() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="menu" element={<Menu />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='dish/:id' element={<Dish />} />
      </Routes>
      <Footer />
    </Router>
  );
}

//router: permite q consiga acessar o window.location.pathname "/"
//routes: sempre para na primeira rota que ele encontra. correspondente ao antigo switch.
//route: de fato o path completo da pagina, sao filhos do routes e podem ter elementos children pra acessa-los.


//nesse caso, em qqr pagina, independente do path, vai ser renderizado o nav. Embaixo tem uma nested route, todo route que começar com / vai exibir o elemento indicado. Como ta nested, atraves do outlet importado do router-dom (no arquivo header) vc consegue acessar a propriedade children, dai se esse route tiver children como é o caso, todo path q tiver após o / vai ser renderizado o elemento indicado. Fora desse nested, tem um About, por ta fora do nested ele não renderiza o Header, apenas o nav pq ta pra geral.

//o asterisco significa todos, então qualquer pagina diferente das q foram especificadas, dá no not found

//o /:id é como se fosse um valor dinamico, pq o path pra exibir os pratos é o mesmo, o que muda é cada prato em si, e isso se diferencia pelo id de cada prato que é unico.