import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { plus, faqSnow } from "../assets";
import { faqData } from "../data/data";
import styles from "./FAQ.module.css";
const FAQ = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  const [curr, setIsOpen] = useState(null);
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>FAQ</h1>
      <div className={styles.faqSnow}>
        <img src={faqSnow} />
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.faqContainer}>
          {faqData.map((faq, i) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              num={i}
              curr={curr}
              plus={plus}
              onOpen={setIsOpen}
              onToggle={toggleHandler}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
