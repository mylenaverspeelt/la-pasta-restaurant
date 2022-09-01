import style from "./Header.module.scss";
import { Link } from "react-router-dom";


export default function Header() {
  const routes = [
    {
      label: "Start",
      to: "/",
    },
    {
      label: "Menu",
      to: "/menu",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <>
      <nav className={style.menu}>
        <ul className={style.menu__list}>
          {routes.map((item, index) => (
            <li key={index} className={style.menu__link}>
              <Link to={item.to}>{item.label} </Link>
            </li>
          ))}
        </ul>
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>Authentic Italian Cuisine</div>
      </header>
    </>
  );
}
