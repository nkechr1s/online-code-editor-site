import styles from "./Header.module.css";

const Header = ({ title }: { title: string }) => {
  return (
    <header className={`${styles.navBar} container`}>
      <a className={styles.link} href="/">
        <h1 arial-label={title} className={styles.logo}>
          {title}
        </h1>
      </a>
    </header>
  );
};

export default Header;
