import { ReactComponent as Logo } from "assets/logo.svg";
import style from './Header.module.scss'

export default function Header() {
  return (
    <>
      <nav className={style.menu} />
      <header className={style.header}>
        <div className={style.header__text}>Authentic Italian Cuisine</div>
      </header>
    </>
  );
}
