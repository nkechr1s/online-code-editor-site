import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <p className={styles.footerText}>
        Released under the
        <a
          target="_blank"
          rel="noreferrer nofollow"
          href="https://opensource.org/license/mit/"
        >
          {" "}
          MIT License
        </a>
      </p>
    </footer>
  );
};

export default Footer;
