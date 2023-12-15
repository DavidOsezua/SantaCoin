import React from "react";
import styles from "./patners.module.css";
import { patnerImages } from "../data/data";

const Patners = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.sectionContainer}`}>
        <h1 className={styles.sectionTitle}> Our Patners</h1>
        <div className="flex justify-between px-[1rem] gap-[1rem] pt-[7px]">
          {patnerImages.map((patnerImage) => (
            <div>
              <img src={patnerImage.image} key={patnerImage.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patners;
