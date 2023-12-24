import { writeContract, readContract } from "@wagmi/core";
import { erc20ABI } from "wagmi";
import abi from "./abi.json";
import { maxUint256 } from "viem";
const contractAddress = "0xD010705f0974E52EBfac6BB28f1D1CfdC7909534";
const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const USDT = "0x55d398326f99059ff775485246999027b3197955";

export const buyPresaleBNB = async (amount) => {
  const hash = await writeContract({
    address: contractAddress,
    abi: abi,
    functionName: "buyPresaleBNB",
    value: amount,
  });
  console.log(hash);
  return hash;
};

export const getContractAllowance = async (owner, token) => {
  const allowance = await readContract({
    address: token == "BUSD" ? BUSD : USDT,
    functionName: "allowance",
    abi: erc20ABI,
    args: [owner, contractAddress],
  });
  return allowance;
};

export const increaseContractAllowance = async (owner, token) => {
  const tokenAddress = token == "BUSD" ? BUSD : USDT;

  const hash = await writeContract({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [contractAddress, maxUint256],
  });
  return hash;
};

export const buyPresale = async (token, amount) => {
  const tokenAddress = token == "BUSD" ? BUSD : USDT;

  const hash = writeContract({
    address: contractAddress,
    abi: abi,
    functionName: "buyPresale",
    args: [tokenAddress, amount],
  });
  return hash;
};
