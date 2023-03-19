import { useEffect, useState } from "react";
import { singleCrypto } from "../Interfaces/interfaces";

const API_BASE = "https://api.coingecko.com/api/v3";

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
        `${API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${howMany}&page=${page}price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`
      );

      const data: singleCrypto[] = await response.json();
      setData(data);
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
