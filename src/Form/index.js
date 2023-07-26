import "./style.css"
import React, { useState } from "react";
import exchangeTable from "./exchangeTable";
import Result from "./Result";
import Clock from "./Clock";


const Form = () => {
    const [result, setResult] = useState(null);
    const [currency, setCurrency] = useState(exchangeTable[0].short);
    const [amount, setAmount] = useState("");

    const calculateResult = (currency, amount) => {
        const rate = exchangeTable.find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <form className="form js-form"
            onSubmit={onSubmit}
        >
            <Clock />
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota w zł</span>
                        <input className="form__field" type="number" min="1" step="any"
                            autoFocus placeholder="Wpisz Wartość w PL"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz Walute</span>
                        <select className="form__field" name="ChooseCurrency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {exchangeTable.map((currency => (
                                <option
                                    key={currency.key}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))
                            }

                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz</button>
            </fieldset>
            <div className="form__sum">
                <Result result={result} />
            </div>
        </form>
    )
};

export default Form;