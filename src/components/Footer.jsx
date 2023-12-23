import React from "react";
import styles from "./Footer.module.css";
import { socialMediaImages } from "../data/data";
import { faqSnow } from "../assets";
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
          {socialMediaImages.map((socialMediaImage) => (
            <a href={socialMediaImage.link} target="_blank">
              <img src={socialMediaImage.image} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
