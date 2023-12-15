import React from "react";
import styles from "./About.module.css";
import SectionTitleAndText from "./SectionTitleAndText";
import { aboutLogo, santaClause } from "../assets";
import { Fade } from "react-awesome-reveal";

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
        <Fade direction="right" delay={400}>
          <div className={styles.tokenContainer}>
            {" "}
            <div className={styles.image}>
              <img src={aboutLogo} />
            </div>
            <div></div>
          </div>
        </Fade>

        <div className={styles.nftContainer}>
          <Fade direction="up" delay={300}>
            <h1 className={styles.nftText}>NFT</h1>
          </Fade>
          <Fade delay={300}>
            <div className={styles.santaClause}>
              <img src={santaClause} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
