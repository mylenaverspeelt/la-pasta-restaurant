import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Menu() {
  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>
A melhor massa da região!
        </div>
      </header>
    </main>
  );
}
