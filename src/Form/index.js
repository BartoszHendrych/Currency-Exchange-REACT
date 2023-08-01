import React, { useState } from "react";
import exchangeTable from "./exchangeTable";
import Result from "./Result";
import Clock from "./Clock";
import { 
        StyledForm, 
        Legend, 
        Fieldset, 
        Tag, 
        SelectedCurrency, 
        EnterValue, 
        Button,
        Sum
    } from "./styled"


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
        <StyledForm
            onSubmit={onSubmit}
        >
            <Clock />
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                <p>
                    <label>
                        <Tag>Kwota w zł</Tag>
                        <EnterValue type="number" min="1" step="any"
                            autoFocus placeholder="Wpisz Wartość w PL"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <Tag>Wybierz Walute</Tag>
                        <SelectedCurrency name="ChooseCurrency"
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

                        </SelectedCurrency>
                    </label>
                </p>
                <Button>Przelicz</Button>
            </Fieldset>
            <Sum>
                <Result result={result} />
            </Sum>
        </StyledForm>
    )
};

export default Form;