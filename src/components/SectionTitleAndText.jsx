import React from "react";
import { Fade } from "react-awesome-reveal";

const SectionTitleAndText = ({ styles, title1, title2, text,text2,text3 }) => {
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

      <div>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>

      <Fade direction="up" delay={600}>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
      </Fade>
    </>
  );
};

export default SectionTitleAndText;
