import { useEffect, useState } from "react";
import { formSnow, formSnow2 } from "../assets";
import styles from "./Form.module.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const priceUsd = 25000;

const Form = () => {
  const [token, setToken] = useState("BNB");
  const [buyAmount, setBuyAmount] = useState("");
  const [output, setOutput] = useState("");
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!buyAmount) return;
    const out =
      token == "BNB"
        ? parseFloat(buyAmount) * 270 * priceUsd
        : parseFloat(buyAmount) * priceUsd;
    setOutput(out);
  }, [token, buyAmount]);

  const handleBuy = async () => {
    console.log("Buying ");
  };

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
            {1 / priceUsd} <span>USDT</span>
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
          <input
            type="number"
            className={`${styles.input}`}
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
          />
        </div>

        <select
          className="text-[#181527] bg-[#E3DDF8] rounded-[0.1875rem] p-[0.3rem] font-bold outline-none"
          onChange={(e) => setToken(e.target.value)}
        >
          <option value="BNB" className="text-[#181527]" selected>
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
        1 USDT = <span>{priceUsd} </span> SANTA COIN
      </h2>

      <div className={`${styles.buyContainer}`}>
        <div className={`flex flex-col gap-[8px] `}>
          <label className={styles.buyText}>You Receive</label>
          <input
            type="number"
            className={`${styles.input}`}
            disabled
            value={output}
          />
        </div>
        <select className="text-[#181527] bg-[#E3DDF8] rounded-[0.1875rem] p-[0.3rem] font-bold outline-none">
          <option value="" className="text-[#181527]">
            Santa Coin
          </option>
        </select>
      </div>
      {isConnected ? (
        <button className={styles.btn}>Buy SantaCoin</button>
      ) : (
        <button className={styles.btn} onClick={open}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Form;
