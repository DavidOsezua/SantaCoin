import React from "react";
import SectionTitleAndText from "./SectionTitleAndText";
import style from "./Roadmap.module.css";
import { RoadmapDesktop, RodmapMobile } from "../assets";
import { Fade } from "react-awesome-reveal";

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

        <Fade delay={400}>
          {" "}
          <div className={style.imageContainer}>
            <div className={style.mobile}>
              {" "}
              <img src={RodmapMobile} />
            </div>

            <img src={RoadmapDesktop} className={style.desktop} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Roadmap;
