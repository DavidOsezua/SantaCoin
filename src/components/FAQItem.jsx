import React from "react";
import styles from "./FAQItem.module.css";

const FAQItem = ({ num, curr, onOpen, faq, plus }) => {
  const isOpen = num === curr;
  const openHandler = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`${styles.container} `}>
      <div
        className={`${
          num % 2 === 0 ? styles.titleContent : styles.titleContent2
        }`}
      >
        <h4 className={`${styles.faqTitle}`}>{faq.header}</h4>
        <img src={plus} className={styles.plus} onClick={openHandler} />
      </div>

      <div className={`${styles.text} ${isOpen && styles.showText}`}>
        {faq.text.split(". ").map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default FAQItem;
