import { useState, useEffect } from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json(); 

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(getRates, 1000);
    }, []);

   return ratesData;
}; 