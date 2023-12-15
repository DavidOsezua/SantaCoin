import React from "react";
import SectionTitleAndText from "./SectionTitleAndText";
import style from "./Roadmap.module.css";
import { RoadmapDesktop, RodmapMobile } from "../assets";

const Roadmap = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <SectionTitleAndText
          styles={style}
          title1={`ROADMAP`}
          title2={`SantaCoin RoadMap`}
          text={`Establish a decentralized autonomous organization (SantaDAO) where community `}
        />

        <div className={style.imageContainer}>
          <img src={RodmapMobile} className={style.mobile} />
          <img src={RoadmapDesktop} className={style.desktop} />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
