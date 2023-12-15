import React from "react";
import { Fade } from "react-awesome-reveal";

const SectionTitleAndText = ({ styles, title1, title2, text }) => {
  return (
    <>
      <Fade direction="left" delay={300}>
        <h2 className={styles.aboutTitle}>{title1}</h2>
      </Fade>

      <Fade delay={400}>
        <div>
          <h1 className={styles.aboutTitle2}>{title2}</h1>
          <p className={styles.aboutText}>{text}</p>
        </div>
      </Fade>

      <Fade direction="up" delay={600}>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
      </Fade>
    </>
  );
};

export default SectionTitleAndText;
