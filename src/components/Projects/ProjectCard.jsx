import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, source_backend },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Link aplicación en vivo
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Codigo frontend
        </a>
        {source_backend && (
          <a href={source_backend} className={styles.link} target="_blank" rel="noopener noreferrer">
            Codigo backend
          </a>
        )}
      </div>
    </div>
  );
};