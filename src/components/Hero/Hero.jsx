import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Sergio</h1>
        <p className={styles.description}>
            Soy desarrollador Fullstack con conocimientos en React, NodeJS, Express y bases de datos Mongo.   
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contactame
        </a>
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
