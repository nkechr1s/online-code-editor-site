import styles from "./Card.module.css";
import { CardProps } from "src/lib/types";
import { Heading } from "src/components/basic";

const Card = ({ id, title, description, imgUrl, imgAlt }: CardProps) => {
  return (
    <div className={styles.featuresContainer} key={id}>
      <div className={styles.featureCard}>
        {title && <Heading variant="h3" text={title} />}
        {description && <p>{description}</p>}
        {imgUrl && (
          <img src={imgUrl} alt={imgAlt} className={styles.featureImage} />
        )}
      </div>
    </div>
  );
};

export default Card;
