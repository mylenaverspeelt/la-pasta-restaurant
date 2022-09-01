import menu from "../../data/menu.json";
import style from "./Homepage.module.scss";
import nossaCasa from "../../assets/homepage/nossaCasa.png";

export default function Homepage() {

  //sortear 3 imagens aleatorias
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
            <button className={style.recomendado__botao}>See more</button>
          </div>
        ))}
      </div>
      <h3 className={style.titulo}>Our place</h3>
      <div className={style.nossaCasa}> 
        <img src={nossaCasa} alt="Casa do La Pasta" />
        <p className={style.nossaCasa__endereco}>
            Avenida Agamenon, 420 <br/> Caruaru - PE <br/> 
        </p>
      </div>

    </section>
  );
}
