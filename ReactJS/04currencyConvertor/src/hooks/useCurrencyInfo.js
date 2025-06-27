import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/acbbc366a3945eb57e998e25/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates); // ✅ Correct field
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
