import styles from "./Footer.module.css";
import { socialMediaImages } from "../data/data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerTitle}>Contact Us</h1>
        <p className={styles.footerText}>
          Have questions, feedback, or interested in partnering with SantaCoin ?
          We'd love to hear from you.
          <br /> Reach out to us at [Contact Information below].
        </p>

        <div className={styles.socialContainer}>
          {socialMediaImages.map((socialMediaImage, index) => (
            <a
              href={socialMediaImage.link}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <img src={socialMediaImage.image} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
