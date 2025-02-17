import styles from "./LaboralReferences.module.css";
import laboralReferences from "../../data/laboralReferences.json";
import { getImageUrl } from "../../utils";

export const LaboralReferences = () => {
  return (
    <section className={styles.container} id="laboralReferences">
      <h2 className={styles.title}>Referencias laborales</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {laboralReferences.map((referenceItem, id)=> {
            return (
              <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(referenceItem.imageSrc)}
                alt={`${referenceItem.company} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${referenceItem.name}`}</h3>
                <p>{`${referenceItem.jobPosition} | ${referenceItem.company} `}</p>
                <p>{`${referenceItem.number}`}</p>
                <p>{`${referenceItem.professionalLink}`}</p>
              </div>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
};
