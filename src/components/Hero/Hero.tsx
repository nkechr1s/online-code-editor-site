import styles from "./Hero.module.css";
import { HeroProps } from "src/lib/types";
import { Button, Heading } from "src/components/ui";

const Hero = ({ title, description, buttonText, linkUrl }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroCol}>
        <Heading
          variant="h1"
          aria-label={title}
          dangerouslySetInnerHTML={{ __html: title }}
          text={title}
        />
        <Heading variant="h3" arial-label={description} text={description} />
        <div className={styles.heroFeatures}>
          <Button
            variant="primary"
            text={buttonText}
            className={styles.btnHero}
            href={linkUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
