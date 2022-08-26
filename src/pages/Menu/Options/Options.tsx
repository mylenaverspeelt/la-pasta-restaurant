// são as opções do menu, que vem de um arquivo json e que é renderizado o label. aplica um estilo caso a opção esteja selecionada ou não. quando o usuario clica na opção desejada, seta o setFilter.
import options from "./options.json";
import style from "./Options.module.scss";

type IOption = typeof options[0];

interface Props {
  option: null | number;
  setOption: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Options({ option, setOption }: Props) {

  function selectOption(options: IOption) {
    if (option === options.id) return setOption(null);
    return setOption(options.id);
  }

  return (
    <div className={style.filtros}>
      {options.map((item) => (
        <button
          className={` 
          ${style.filtros__filtro} ${
            option === item.id ? style["filtros__filtro--ativo"] : " "
          }`}
          key={item.id}
          onClick={() => selectOption(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
