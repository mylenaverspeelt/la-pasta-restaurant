import menu from "../../data/menu.json";
import style from "./Homepage.module.scss";
import nossaCasa from "../../assets/homepage/nossaCasa.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/dish";
export default function Homepage() {

  //sortear 3 imagens aleatorias
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirectToSeeMore(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: { dish } });

  }

  return (
    <>
      <section className={style.container}>
        <h3 className={style.titulo}>Pratos Recomendados</h3>
        <div className={style.recomendados}>
          {recommendedDishes.map((item) => (
            <div key={item.id} className={style.recomendado}>
              <div className={style.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
                <p className={style.paragrafo}>{item.title}</p>
              </div>
              <button className={style.recomendado__botao}
                onClick={() => redirectToSeeMore(item)}
              >Ver mais</button>
            </div>
          ))}
        </div>
      </section>
      <div className={style.nossaCasaContainer}>
        <h3 className={style.titulo}>Our place</h3>
        <div className={style.nossaCasa}>
          <img src={nossaCasa} alt="La Pasta Restaurant" />
          <p className={style.nossaCasa__endereco}>
            Avenida Pernambuco, 081 <br /> Recife - PE <br />
          </p>
        </div>
      </div>
    </>
  );
}



// da pra fazer um link entre o useLocation e o useNavigate, nesse caso o estado que é passado dentro do navigate vai pra o location, tipo um trafego de estados. tem duas propriedades, state e replace, nesse caso só vai usar o state.