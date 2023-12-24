import React, { useState } from "react";
import styles from "./About.module.css";
import SectionTitleAndText from "./SectionTitleAndText";
import { aboutLogo, santaClause } from "../assets";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const contractAdd = `0xD010705f0974E52EBfac6BB28f1D1CfdC7909534`;

const About = () => {
  const [copied, setCopied] = useState(null);

  const copyHandler = () => {
    setCopied(true);
  };
  return (
    <section className={styles.section}>
      <div className={styles.aboutContainer}>
        <SectionTitleAndText
          styles={styles}
          title1={`ABOUT `}
          text2={`Contract Address:`}
          text3={`0xD010705f0974E52EBf ac6BB28f1D1CfdC7909534`}
          copy={
            <CopyToClipboard text={contractAdd}>
              <button onClick={copyHandler}>
                {copied ? <FaCheck /> : <FaRegCopy />}
              </button>
            </CopyToClipboard>
          }
          title2={`About SantaCoin `}
          text={`Establish a decentralized autonomous organization (SantaDAO) where community `}
        />

        <Fade direction="right" delay={400}>
          <div className={styles.tokenContainer}>
            <div className={styles.image}>
              <img src={aboutLogo} />
            </div>

            <div className="flex justify-center mt-[1rem]">
              <a
                href="https://santacoin.gitbook.io/santacoin-whitepaper/"
                target="_blank"
                className=" border-[1px] px-[1.5rem] py-[0.3rem]"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </Fade>

        <div className={styles.nftContainer}>
          <Fade direction="up" delay={300}>
            <h1 className={styles.nftText}>NFT</h1>
          </Fade>
          <Fade delay={300}>
            <div className={styles.santaClause}>
              <img src={santaClause} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
