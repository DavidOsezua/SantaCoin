import React from "react";

const SectionTitleAndText = ({ styles, title1, title2, text }) => {
  return (
    <>
      <h2 className={styles.aboutTitle}>{title1}</h2>
      <div>
        <h1 className={styles.aboutTitle2}>{title2}</h1>
        <p className={styles.aboutText}>{text}</p>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default SectionTitleAndText;
