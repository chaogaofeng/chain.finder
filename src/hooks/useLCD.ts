import { useMemo } from "react";
import { LCDClient } from "@gnchain/chain.js";
import { useCurrentChain } from "../contexts/ChainsContext";

const useLCDClient = () => {
  const { lcd, chainID } = useCurrentChain();
  const url = lcd;

  const lcdClient = useMemo(
    () => new LCDClient({ URL: url, chainID }),
    [url, chainID]
  );

  return lcdClient;
};

export default useLCDClient;
