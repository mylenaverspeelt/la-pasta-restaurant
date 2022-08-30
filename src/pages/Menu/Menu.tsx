//renderiza o menu/cardapio dependendo do que tiver no searcher/filtro/ordenador
import style from "./Menu.module.scss";
import Searcher from "./Searcher/Searcher";
import { useState } from "react";
import Options from "./Options/Options";
import Filters from "./Filters/Filters";
import Items from "./Items/Items";
import Header from "components/Header/Header";


export default function Menu() {
  const [search, setSearch] = useState("");
  const [userSelectedOption, setuserSelectedOption] = useState<number | null>(null);
  const [filter, setFilter] = useState("");

  return (
    <main>
      <Header />
      <section className={style.menu}>
        <h3 className={style.menu__title}>Menu</h3>
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
