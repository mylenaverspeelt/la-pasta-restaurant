import style from "./Dish.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import menu from "data/menu.json";
import DishTags from "components/DishTags/DishTags";
import NotFound from "pages/NotFound/NotFound";
import Header from "../../components/Header/Header";
import {Route, Routes} from "react-router-dom";

export default function Dish() {
  const { id } = useParams();

  const dish = menu.find((item) => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='*' element={<Header />} >
        <Route index element={<> 
          <button className={style.voltar} onClick={() => navigate(-1)}>{"< Go Back"}</button>
          <section className={style.container}>
            <h1 className={style.titulo}>{dish.title}</h1>
            <div className={style.imagem}>
              <img src={dish.photo} alt={dish.description} />
            </div>
            <div className={style.conteudo}>
              <p className={style.conteudo__descricao}>{dish.description}</p>
            </div>
            <DishTags {...dish} />
          </section></>} />
      </Route>
    </Routes>
  );
}

// o useParams é um hook do react-router-dom que retorna um objeto (chave/valor) dos parametros dinamicos que foram definidos no route/path associados a esse componente, no arquivo de routes, de acordo de como você nomear ele lá, nesse caso foi o ID. 

//toda essa parte de routes é pra fazer o header renderizar na pagina do prato