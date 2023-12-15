import React from "react";
import styles from "./About.module.css";
import SectionTitleAndText from "./SectionTitleAndText";
import { aboutLogo, santaClause } from "../assets";

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.aboutContainer}>
        <SectionTitleAndText
          styles={styles}
          title1={`ABOUT `}
          title2={`About SantaCoin `}
          text={`Establish a decentralized autonomous organization (SantaDAO) where community `}
        />

        <div className={styles.tokenContainer}>
          <div className={styles.image}>
            <img src={aboutLogo} />
          </div>

          <div></div>
        </div>

        <div className={styles.nftContainer}>
          <h1 className={styles.nftText}>NFT</h1>
          <div className={styles.santaClause}>
            <img src={santaClause} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
