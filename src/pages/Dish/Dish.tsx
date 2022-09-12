import style from "./Dish.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import menu from "data/menu.json";

export default function Dish() {
  const { id } = useParams();
  
  const dish = menu.find((item) => item.id === Number(id));
  if (!dish) {
    return "";
  }

  const navigate = useNavigate();

  return (
    <>
      <button className={style.voltar} onClick={() => navigate(-1)}>{"< Go Back"}</button>
      <section className={style.container}>
        <h1 className={style.titulo}>{dish.title}</h1>
        <div className={style.imagem}>
          <img src={dish.photo} alt={dish.description} />
        </div>
        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>{dish.description}</p>
        </div>
        <div
          className={classNames({
            [style.tags__tipo]: true,
            [style[`tags__tipo__${dish.category.label.toLowerCase()}`]]: true,
          })}
        >
          {dish.category.label}
        </div>
        <div className={style.tags__porcao}>{dish.size}g</div>
        <div className={style.tags__qtdepessoas}>
          Serve {dish.serving} pessoa{dish.serving === 1 ? "" : "s"}
        </div>
        <div className={style.tags__valor}>R$ {dish.price.toFixed(2)}</div>
      </section>
    </>
  );
}

// o useParams é um hook do react-router-dom que retorna um objeto (chave/valor) dos parametros dinamicos que foram definidos no route/path associados a esse componente, no arquivo de routes, de acordo de como você nomear ele lá, nesse caso foi o ID. 
