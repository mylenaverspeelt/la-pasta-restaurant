import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.p}>
        Desenvolvido por: 
        <a
          href="https://www.linkedin.com/in/mylenaverspeelt/"
          target="_blank"
          rel="noreferrer"
        > Mylena Verspeelt
        </a>
      </p>
    </footer>
  );
}
