import style from "./About.module.scss";
import casa from "assets/about/casa.png";
import massa1 from "assets/about/massa1.png";
import massa2 from "assets/about/massa2.png";

const images = [massa1, massa2];

export default function About() {
  return (
    <section className={style.container}>
      <h3 className={style.titulo}>About</h3>
      <div className={style.sobreNos}>
        <img src={casa} alt="La Pasta Restaurant" />
        <div className={style.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
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
