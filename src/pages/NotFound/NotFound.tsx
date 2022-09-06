import style from "./NotFound.module.scss";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [style.container]: true,
      })}
    >
      <button className={style.voltar} onClick={() => navigate(-1)}>
        {" < Go back"}
      </button>

      <NotFoundImage />
    </div>
  );
}

//useNavigate é um hook do react-router-dom pra conseguir acessar as camadas das rotas que o usuário faz. nesse caso o -1 é uma camada a menos, literalmente voltar à pagina anterior que o usuario tava.
