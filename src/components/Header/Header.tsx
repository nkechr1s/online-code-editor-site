import styles from "./Header.module.css";
import { HeaderProps } from "src/lib/types";
import { Heading } from "src/components/ui";

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.navBar}>
      <div className="container">
        <a className={styles.link} href="/">
          <Heading
            variant="h1"
            arial-label={title}
            className={styles.logo}
            text={title}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
