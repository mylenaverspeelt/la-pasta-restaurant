// recebe via props o que o usuario pesquisou OU se ele clicou na opção desejada E se ele utilizou algum filtro de busca, retorna a pesquisa do usuário de acordo com o que ele escolheu, que no caso é um componente a parte, o Item.

import menu from "../../../data/menu.json";
import Item from "./Item/Item";
import style from "./Items.module.scss";
import { useEffect, useState } from "react";
import { Menu } from "types/dish";


interface Props {
  search: string;
  filter: string;
  userSelectedOption: number | null;
}

export default function Items({ search, filter, userSelectedOption }: Props) {
  const [list, setList] = useState(menu);

  function searchTest(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (userSelectedOption !== null) return userSelectedOption === id;
    return true;
  }

  function order(newList: Menu) {
    switch (filter) {
    case "porcao":
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case "qtde_pessoas":
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case "preco":
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;

    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(order(newList));
  }, [search, filter, userSelectedOption]);

  return (
    <div className={style.itens}>
      {list.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          photo={item.photo}
          price={item.price}
          serving={item.serving}
          size={item.size}
        />
      ))}
    </div>
  );
}
