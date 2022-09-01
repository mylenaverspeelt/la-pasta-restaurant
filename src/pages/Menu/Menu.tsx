//renderiza o menu/cardapio dependendo do que tiver no searcher/filtro/ordenador
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
        <Items search={search} filter={filter} userSelectedOption={userSelectedOption}/>
      </section>
    </main>
  );
}
