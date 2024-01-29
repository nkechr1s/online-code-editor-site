import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { heroTypes } from "src/lib/types";

const Hero = ({ title, description, buttonText, linkUrl }: heroTypes) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCol}>
        <h1 aria-label={title} dangerouslySetInnerHTML={{ __html: title }} />
        <h3 arial-label={description}>{description}</h3>
        <div className={styles.heroFeatures}>
          <Link className={styles.linkHero} to={`${linkUrl}`}>
            <button className={styles.heroBtn}>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
