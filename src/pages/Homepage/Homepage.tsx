import menu from "../../data/menu.json";
import style from "./Homepage.module.scss";

export default function Homepage() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section className={style.container}>
      <h3 className={style.titulo}>Recommended dishes</h3>
      <div className={style.recomendados}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={style.recomendado}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <p className={style.paragrafo}>{item.title}</p>
            </div>
            <button className={style.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
