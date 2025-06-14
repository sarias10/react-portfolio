import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Sergio</h1>
        <p className={styles.description}>
        Soy Ingeniero de sistemas con experiencia en desarrollo Full Stack con tecnologias como React, Node.js, TypeScript, Express, AWS y bases de datos tanto relacionales como no relacionales.
        </p>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.contactBtn}>
            Contactame
          </a>
          <a href={getImageUrl("cv/cv_sergio_arias.pdf")} className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
            Ver CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
