import styles from "./Header.module.css";
import { HeaderTypes } from "src/lib/types";

const Header = ({ title }: HeaderTypes) => {
  return (
    <header className={styles.navBar}>
      <div className="container">
        <a className={styles.link} href="/">
          <h1 arial-label={title} className={styles.logo}>
            {title}
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
