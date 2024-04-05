import style from "./Header.module.scss";
import {Outlet} from "react-router-dom";

export default function indexPage(){
  return(
    <>
      <header className={style.header}>
        <div className={style.header__text}>Autêntica Cozinha Italiana</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}