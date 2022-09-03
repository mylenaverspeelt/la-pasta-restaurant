//item em si do cardapio, que vai ser renderizado apos a escolha do usuario. é o elemento em si, com foto, porção, valor...

import style from "./Item.module.scss";
import classNames from "classnames";

interface Props {
  title: string;
  description: string;
  photo: string;
  price: number;
  serving: number;
  size: number;
  category: {
    id: number;
    label: string;
  };
}

export default function Item({
  title,
  description,
  category,
  photo,
  size,
  price,
  serving,
}: Props) {
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.item__tags}>
          <div
            className={classNames({
              [style.item__tipo]: true,
              [style[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={style.item__porcao}>{size}g</div>
          <div className={style.item__qtdpessoas}>
            Serves {serving}{serving === 1 ? " person" : " people"}{" "}
          </div>
          <div className={style.item__valor}>{price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
