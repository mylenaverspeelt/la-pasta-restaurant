import filters from './filters.json'
import style from './Filters.module.scss'
type IOption = typeof filters[0]

export default function Filters(){

function selectFilters(option: IOption){

}

    return(
        <div className={style.filtros}>
        {filters.map((option) => (
            <button  className= {style.filtros__filtro}key={option.id} onClick={() => selectFilters(option)}>
                {option.label}
            </button>
        ))} 
        </div>
    )
}