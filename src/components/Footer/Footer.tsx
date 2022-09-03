import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.p}>
        Developed by: 
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
