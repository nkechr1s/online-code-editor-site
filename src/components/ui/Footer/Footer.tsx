import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
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
      </div>
    </footer>
  );
};

export default Footer;
