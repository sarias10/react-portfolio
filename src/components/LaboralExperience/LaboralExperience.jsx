import styles from "./LaboralExperience.module.css";
import laboralExperience from "../../data/laboralExperience.json";
import { getImageUrl } from "../../utils";

export const LaboralExperience = () => {
  return (
    <section className={styles.container} id="laboralExperience">
      <h2 className={styles.title}>Experiencia laboral</h2>
      <div className={styles.content}>
        
        <ul className={styles.history}>
          {laboralExperience.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}`}</p>
                  <p>{`${historyItem.description}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
