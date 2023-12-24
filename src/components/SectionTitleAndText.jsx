import React from "react";
import { Fade } from "react-awesome-reveal";
import CopyToClipboard from "react-copy-to-clipboard";

const contractAdd = `0xD010705f0974E52EBfac6BB28f1D1CfdC7909534`;

const SectionTitleAndText = ({
  styles,
  title1,
  title2,
  text,
  text2,
  text3,
  copy,
}) => {
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
        <p className={styles.contractAdd}>
          {text3} {copy}
        </p>
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
