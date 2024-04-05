//barra de pesquisa. pega o input do usuario e seta o setSearch.
import React from "react";
import style from "./Searcher.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searcher({ search, setSearch }: Props) {
  return (
    <div className={style.buscador}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Buscar"
        value={search}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
