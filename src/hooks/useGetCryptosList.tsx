import { useEffect, useState } from "react";
import {
  API_BASE,
  DEFAULT_PERCENTAGE_VALUES,
} from "../Configs/globalVariables";

import { singleCrypto } from "../Interfaces/interfaces";

export const useGetCryptosList = (
  howMany: number,
  page: number
): { loading: boolean; error: boolean; data: singleCrypto[] } => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<singleCrypto[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const response: Response = await fetch(
        `${API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${howMany}&page=${page}&${DEFAULT_PERCENTAGE_VALUES}`
      );

      const data: singleCrypto[] = await response.json();
      setData(data);
      setLoading(false);
      setError(false);
    } catch (err) {
      console.log("error while fetching cryptos list");
      setError(true);
    }
  };

  console.log("object", data);

  return {
    loading,
    error,
    data,
  };
};
