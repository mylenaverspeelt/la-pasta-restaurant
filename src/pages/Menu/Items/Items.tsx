import menu from './items.json'
import Item from './Item/Item'
import style from './Items.module.scss'



export default function Items() {
  return <div className={style.itens}>
    {
        menu.map(item => (
            <Item key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            photo={item.photo}
            price={item.price}
            serving={item.serving}
            size={item.size}
            />
        ))
    }
  </div>
}
