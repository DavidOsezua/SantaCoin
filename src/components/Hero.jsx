import styles from "./Hero.module.css";
import Patners from "./Patners";
import Form from "./Form";
import { snow, snowMobile, heroLogo, formBigSnow } from "../assets";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.ellipse1}`}></div>
      <div className={`${styles.ellipse2}`}></div>
      <div className={`${styles.ellipse3}`}></div>{" "}
      <div className={styles.formBigSnow}>
        <img src={formBigSnow} />
      </div>
      <div className={styles.patners}>
        <Fade direction="up">
          <Patners />
        </Fade>
      </div>
      <div>
        <img src={snow} className={styles.snow} />

        <img src={snowMobile} className={``} />
      </div>
      <div className={`${styles.heroContainer}`}>
        <img src={heroLogo} className={`${styles.heroLogo}`} />

        <Fade delay={300}>
          <div>
            <h1 className={styles.heroTitle}>SantaCoin Central</h1>
            <p className={styles.heroText}>
              SantaCoin Central is a festive and meme-inspired decentralized
              currency that brings the magic of Christmas and the joy of
              gift-giving to the world of cryptocurrency.
            </p>
          </div>
        </Fade>

        <Fade delay={300}>
          <div className="p-[1rem]">
            <Form />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
