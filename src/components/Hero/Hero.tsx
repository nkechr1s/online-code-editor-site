import styles from "./Hero.module.css";
import { HeroTypes } from "src/lib/types";
import { Button } from "src/components/ui";
const Hero = ({ title, description, buttonText, linkUrl }: HeroTypes) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCol}>
        <h1 aria-label={title} dangerouslySetInnerHTML={{ __html: title }} />
        <h3 arial-label={description}>{description}</h3>
        <div className={styles.heroFeatures}>
          <Button variant="primary" text={buttonText} href={linkUrl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
