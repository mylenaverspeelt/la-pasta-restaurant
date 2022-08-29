// são as opções do menu, que vem de um arquivo json e que é renderizado o label. aplica um estilo caso a opção esteja selecionada ou não. quando o usuario clica na opção desejada, seta o setOption.
import options from "./options.json";
import style from "./Options.module.scss";
import classNames from "classnames";
type IOption = typeof options[0];

interface Props {
  userSelectedOption: null | number;
  setUserSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Options({ userSelectedOption, setUserSelectedOption }: Props) {

  function selectOption(options: IOption) {
    if (userSelectedOption === options.id) return setUserSelectedOption(null);
    return setUserSelectedOption(options.id);
  }

  return (
    <div className={style.filtros}>
      {options.map((option) => (
        <button
          className={classNames({
            [style.filtros__filtro]: true,
            [style["filtros__filtro--ativo"]]: userSelectedOption === option.id,
          })}
          key={option.id}
          onClick={() => selectOption(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
