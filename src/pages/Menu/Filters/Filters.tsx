import filters from "./filters.json";
import style from "./Filters.module.scss";


type IOption = typeof filters[0];

interface Props {
  filter: null | number;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectFilters(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={style.filtros}>
      {filters.map((option) => (
        <button
          className={` 
          ${style.filtros__filtro} ${
            filter === option.id ? style["filtros__filtro--ativo"] : " "
          }`}
          key={option.id}
          onClick={() => selectFilters(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
