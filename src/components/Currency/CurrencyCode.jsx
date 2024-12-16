import { useEffect, useState } from "react";

const CurrencyDisplay = ({ currencyCode }) => {
    const [currencySymbol, setCurrencySymbol] = useState("");

    useEffect(() => {
        const fetchCurrencySymbol = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
               console.log("data of currency is", data)
                // Map currency symbols
                const symbol = data
                    .flatMap((country) => Object.values(country.currencies || {}))
                    .find((currency) => currency.name === currencyCode)?.symbol;

                setCurrencySymbol(symbol || "N/A");
            } catch (error) {
                console.error("Error fetching currency symbol:", error);
            }
        };

        if (currencyCode) {
            fetchCurrencySymbol();
        }
    }, [currencyCode]);

    return <div>{currencySymbol}</div>;
};

export default CurrencyDisplay;
