//filtros de pesquisa pro usuário selecionar. retorna um botao que ao ser clicado, mostra/esconde uma lista de filtros. quando clicada no filtro desejado (que vem de um json), seta o setFilter.
import style from "./Filters.module.scss";
import filters from "./filters.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({ filter, setFilter }: Props) {

  const [open, setOpen] = useState(false);

  const selectedFilterName =
    filter && filters.find((item) => item.value === filter)?.name;

  return (
    <button
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      className={classNames({
        [style.ordenador]: true,
        [style["ordenador--ativo"]]: filter !== "",
      })}
    >
      <span>{selectedFilterName || "Filter by:"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [style.ordenador__options]: true,
          [style["ordenador__options--ativo"]]: open,
        })}
      >
        {filters.map((item) => (
          <div
            onClick={() => setFilter(item.value)}
            className={style.ordenador__option}
            key={item.value}
          >
            {item.name}
          </div>
        ))}
      </div>
    </button>
  );
}
