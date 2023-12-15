import React from "react";
import Card from "./Card";
import { formBigSnow, formSnow, formSnow2 } from "../assets";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={`${styles.formContainer}`}>
      <div className={styles.formSnow}>
        <img src={formSnow} />
      </div>
      <div className={styles.formSnow2}>
        <img src={formSnow2} />
      </div>

      <h2 className={styles.formTitle}>Buy SantaCoin</h2>

      <div className={styles.nextPriceContainer}>
        <div className={styles.currentPriceContainer}>
          <p className={styles.currentPrice}>Current Price </p>

          <p className={styles.usdt}>
            0.0.001 <span>USDT</span>
          </p>
        </div>

        <div className={styles.nextPrice}>
          <p className={styles.nextPriceUsdt}>
            Next Price : <span>0.002</span> USDT
          </p>
        </div>
      </div>

      <div className={`${styles.buyContainer}`}>
        <div className={`flex flex-col gap-[8px]`}>
          <label className={styles.buyText}>You Send</label>
          <input type="number" className={`${styles.input}`} />
        </div>

        <select className="text-[#181527] bg-[#E3DDF8] rounded-[0.1875rem] p-[0.3rem] font-bold outline-none">
          <option value="BNB" className="text-[#181527]">
            BNB
          </option>
          <option value="USDT" className="text-[#181527]">
            USDT
          </option>
          <option value="BUSD" className="text-[#181527]">
            BUSD
          </option>
        </select>
      </div>

      <h2 className="font-bold">
        1 USDT = <span>1000 </span> SANTA COIN
      </h2>

      <div className={`${styles.buyContainer}`}>
        <div className={`flex flex-col gap-[8px] `}>
          <label className={styles.buyText}>You Receive</label>
          <input type="number" className={`${styles.input}`} />
        </div>
        <select className="text-[#181527] bg-[#E3DDF8] rounded-[0.1875rem] p-[0.3rem] font-bold outline-none">
          <option value="BNB" className="text-[#181527]   ">
            Santa Coin
          </option>
          <option value="USDT" className="text-[#181527]">
            Santa Coin
          </option>
          <option value="BUSD" className="text-[#181527]">
            Santa Coin
          </option>
        </select>
      </div>

      <button className={styles.btn}>Connect Wallet</button>
    </div>
  );
};

export default Form;
