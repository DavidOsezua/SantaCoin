import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { plus, faqSnow } from "../assets";
import { faqData } from "../data/data";
import styles from "./FAQ.module.css";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  const [curr, setIsOpen] = useState(null);
  return (
    <section className={styles.section}>
      <Fade direction="up" delay={300}>
        {" "}
        <h1 className={styles.sectionTitle}>FAQ</h1>
      </Fade>

      <div className={styles.faqSnow}>
        <img src={faqSnow} />
      </div>

      <div className={styles.sectionContainer}>
        <Fade cascade>
          <ul className={styles.faqContainer}>
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
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default FAQ;
