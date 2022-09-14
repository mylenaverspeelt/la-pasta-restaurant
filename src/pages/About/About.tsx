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
        <img className={style.sobreNos__img} src={casa} alt="La Pasta Restaurant" />
        <div className={style.sobreNos__texto}>
          <p>
          La Pasta Restaurant offers you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in Pernambuco! We cherish the traditional ingredients of Italian cuisine, fresh and excellent quality to make your experience even more intense!
          </p>
          <p>
          We also have a meat menu with many options according to your taste!
          </p>
          <p>
          We have a reserve of
             special wines that harmonize perfectly with your dish, whether
             meat or pasta!
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
