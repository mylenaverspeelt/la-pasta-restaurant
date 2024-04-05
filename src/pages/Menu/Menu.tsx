//renderiza o menu/cardapio se não rolar nada, ele apenas renderiza o menu. caso tenha algum input do usuario ou se ele selecionar alguma tab, vão ser passadas as determidas props

import style from "./Menu.module.scss";
import Searcher from "./Searcher/Searcher";
import { useState } from "react";
import Options from "./Options/Options";
import Filters from "./Filters/Filters";
import Items from "./Items/Items";


export default function Menu() {
  const [search, setSearch] = useState("");
  const [userSelectedOption, setuserSelectedOption] = useState<number | null>(null);
  const [filter, setFilter] = useState("");

  return (
    <main>
      <section className={style.container}>
        <h3 className={style.titulo}>Menu</h3>
        <Searcher search={search} setSearch={setSearch} />  
        <div className={style.cardapio__filtros}>
          <Options userSelectedOption={userSelectedOption} setUserSelectedOption={setuserSelectedOption}/>
          <Filters filter={filter} setFilter={setFilter}/>
        </div>
        <div className={style.itemContainer}>
          <Items search={search} filter={filter} userSelectedOption={userSelectedOption}/>
        </div>
      </section>
    </main>
  );
}
