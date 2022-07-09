import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Searcher from "./Searcher/Searcher";
import { useState } from "react";
import Filters from "./Filters/Filters";

export default function Menu() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>Authentic Italian Cuisine</div>
      </header>
      <section className={style.menu}>
        <h3 className={style.menu__title}>Menu</h3>
        <Searcher search={search} setSearch={setSearch} />
        <div className={style.cardapio__filtros}>
          <Filters />
        </div>
      </section>
    </main>
  );
}
