import { useEffect, useState } from "react";

const API_BASE = "https://api.coingecko.com/api/v3";

export const useGetCryptosList = (
  howMany: number,
  page: number
): { loading: boolean; error: boolean; data: object } => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<object>({});

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const response: Response = await fetch(
        `${API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${howMany}&page=${page}&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y`
      );

      const data: object = await response.json();
      setData(data);
    } catch (err) {
      console.log("error while fetching cryptos list");
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  console.log("object", data);

  return {
    loading,
    error,
    data,
  };
};
