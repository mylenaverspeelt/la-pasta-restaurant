import style from "./About.module.scss";
import casa from "assets/about/casa.png";
import massa1 from "assets/about/massa1.png";
import massa2 from "assets/about/massa2.png";

const images = [massa1, massa2];

export default function About() {
  return (
    <section className={style.container}>
      <h3 className={style.titulo}>Sobre Nós</h3>
      <div className={style.sobreNos}>
        <img className={style.sobreNos__img} src={casa} alt="La Pasta Restaurant" />
        <div className={style.sobreNos__texto}>
          <p>
            O Restaurante La Pasta oferece a você, nosso querido cliente, a mais saborosa e sofisticada Pasta Italiana caseira em Pernambuco! Valorizamos os ingredientes tradicionais da culinária italiana, frescos e de excelente qualidade, para tornar sua experiência ainda mais intensa!
          </p>
          <p>
            Também temos um menu de carnes com muitas opções de acordo com seu gosto!
          </p>
          <p>
            Contamos com uma reserva de vinhos especiais que harmonizam perfeitamente com seu prato, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={style.imagens}>
        {images.map((item, index) => (
          <div key={index} className={style.imagens__imagem}>
            <img src={item} alt="Imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
