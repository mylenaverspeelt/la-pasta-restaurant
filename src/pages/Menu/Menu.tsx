//renderiza o menu/cardapio dependendo do que tiver no searcher/filtro/ordenador
import style from "./Menu.module.scss";
import Searcher from "./Searcher/Searcher";
import { useState } from "react";
import Options from "./Options/Options";
import Filters from "./Filters/Filters";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState<number | null>(null);
  const [filter, setFilter] = useState('')

  return (
    <main>
      <section className={style.menu}>
        <h3 className={style.menu__title}>Menu</h3>
        <Searcher search={search} setSearch={setSearch} />
        <div className={style.cardapio__filtros}>
          <Options option={option} setOption={setOption}/>
          <Filters filter={filter} setFilter={setFilter}/>
        </div>
      </section>
    </main>
  );
}
