import React, { useState } from "react";
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
        Sum,
        Loading,
        Failure
    } from "./styled";
import { useRatesData } from "./useRatesData";



const Form = () => {
    const [result, setResult] = useState(null);
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

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
                {ratesData.status === "loading" ? (
                    <Loading>
                        Sekunda... Ładuję kursy walut z Europejskiego Banku Centralnego.
                    </Loading>
                )
                    :
                    (ratesData.status === "error" ? (
                        <Failure>
                            Coś poszło nie tak... Sprawdź połącznienie z internetem.
                        </Failure>
                    ) : (
                        <>
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
                                        {Object.keys(ratesData.rates).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))
                                        }

                                    </SelectedCurrency>
                                </label>
                            </p>
                            <Button>Przelicz</Button>
                        </>
                    ))
                }

            </Fieldset>
            <Sum>
                <Result result={result} />
            </Sum>
        </StyledForm>
    )
};

export default Form;