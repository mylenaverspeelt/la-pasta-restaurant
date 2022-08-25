import style from "./Ordenador.module.scss";
import options from "./Options.json";

export default function Ordenador() {
  return (
    <button className={style.ordenador}>
      <span>Ordenar por:</span>
      <div className={style.ordenador__options}>
{options.map((option) => (
<div className={style.ordenador__option} key={option.value}>
    {option.nome}
     </div>
))}
      </div>
    </button>
  );
}
