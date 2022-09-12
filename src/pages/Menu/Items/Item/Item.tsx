//item em si do cardapio, que vai ser renderizado apos a escolha do usuario. é o elemento em si, com foto, porção, valor...

import style from "./Item.module.scss";
import DishTags from "components/DishTags/DishTags";
import { Dish } from "types/dish";
import { useNavigate } from "react-router-dom";



export default function Item(Props: Dish) {
  const { id, title, description, photo} = Props;

  const navigate = useNavigate();

  return (
    <div className={style.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishTags {...Props}/>
      </div>
    </div>
  );
}
