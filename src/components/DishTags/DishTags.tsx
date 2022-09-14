import style from "./DishTags.module.scss";
import classNames from "classnames";
import { Dish } from "types/dish";

export default function DishTags({ category, size, serving, price} : Dish) {
  return (
    <div className={style.tags}>
      <div
        className={classNames({
          [style.tags__tipo]: true,
          [style[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={style.tags__porcao}>{size}g</div>
      <div className={style.tags__qtdpessoas}>
        Serves {serving}
        {serving === 1 ? " person" : " people"}{" "}
      </div>
      <div className={style.tags__valor}>{price.toFixed(2)}</div>
    </div>
  );
}

