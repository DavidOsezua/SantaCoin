import { useEffect, useState } from "react";
import { formSnow, formSnow2 } from "../assets";
import styles from "./Form.module.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { getPublicClient } from "@wagmi/core";

import { toast } from "react-toastify";

import {
  buyPresale,
  buyPresaleBNB,
  getContractAllowance,
  increaseContractAllowance,
} from "../func/presale";
import { parseEther } from "viem";

const priceUsd = 25000;

const Form = () => {
  const [token, setToken] = useState("BNB");
  const [buyAmount, setBuyAmount] = useState("");
  const [output, setOutput] = useState("");
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const publicClient = getPublicClient();

  useEffect(() => {
    if (!buyAmount) return;
    const out =
      token == "BNB"
        ? parseFloat(buyAmount) * 270 * priceUsd
        : parseFloat(buyAmount) * priceUsd;
    setOutput(out);
  }, [token, buyAmount]);

  const handleBuy = async () => {
    if (!buyAmount) return;
    setLoading(true);
    try {
      if (token == "BNB") {
        const hash = await buyPresaleBNB(parseEther(buyAmount));
        await toast.promise(publicClient.waitForTransactionReceipt(hash), {
          error: "Error Buying presale",
          success: "Presale Bought Successfully",
          pending: "Buying presale",
        });
      } else {
        const amountWei = parseEther(buyAmount);
        const allowance = await getContractAllowance(address, token);

        if (allowance < amountWei) {
          const hash = await increaseContractAllowance(address, token);
          await toast.promise(publicClient.waitForTransactionReceipt(hash), {
            error: "Error Approving Token",
            success: "Approve Successful",
            pending: "Approving Token",
          });
        }
        const hash = await buyPresale(token, amountWei);
        await toast.promise(publicClient.waitForTransactionReceipt(hash), {
          error: "Error Buying presale",
          success: "Presale Bought Successfully",
          pending: "Buying presale",
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.formContainer}`}>
      <div className={styles.formSnow}>
        <img src={formSnow} />
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
        <div className={` `}>
          <p className={styles.buyText}>You Send</p>
          <div className="w-[70%]">
            <input
              type="number"
              className={`${styles.input}`}
              value={buyAmount}
              onChange={(e) => setBuyAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-[1rem]">
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
      </div>

      <h2 className="font-bold">
        1 USDT = <span>{priceUsd} </span> SANTA COIN
      </h2>

      <div className={`${styles.buyContainer}`}>
        <div className={`  `}>
          <p className={styles.buyText}>You Receive</p>
          <div className="w-[70%]">
            <input
              type="number"
              className={`${styles.input}`}
              disabled
              value={output}
            />
          </div>
        </div>

        <div className="mt-[1rem]">
          <select className="text-[#181527] bg-[#E3DDF8] rounded-[0.1875rem] p-[0.3rem] font-bold outline-none">
            <option value="" className="text-[#181527]">
              Santa Coin
            </option>
          </select>
        </div>
      </div>
      {isConnected ? (
        <button className={styles.btn} onClick={handleBuy} disabled={loading}>
          Buy SantaCoin
        </button>
      ) : (
        <button className={styles.btn} onClick={open}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Form;
