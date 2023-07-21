import "./style.css";

const Form = () => (
    <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota w zł</span>
                        <input className="form__field" type="number" min="1" step="any"
                          autoFocus placeholder="Wpisz Wartość w PL" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz Walute</span>
                        <select className="form__field" name="ChooseCurrency">
                            <option value="EUR">Euro</option>
                            <option value="CHF">Frank Szwajcarski</option>
                            <option value="GBP">Funt Brytyjski</option>
                            <option value="USD">Dolar Amerykański</option>
                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz</button>
            </fieldset>
            <div className="form__sum">
                <span></span>
            </div>
        </form>
);

export default Form;