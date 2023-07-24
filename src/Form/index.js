import "./style.css"
const Form = () => {
    return ( <form className="form js-form">
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <p>
            <label>
                <span className="form__labelText">Kwota w zł</span>
                <input className="form__field js-amount" type="number" min="1" step="any"
                    autofocus placeholder="Wpisz Wartość w PL" />
            </label>
        </p>
        <p>
            <label>
                <span className="form__labelText">Wybierz Walute</span>
                <select className="form__field js-currency" name="ChooseCurrency">
                    <option value="EUR">Euro</option>
                    <option value="CHF">Frank Szwajcarski</option>
                    <option value="GBP">Funt Brytyjski</option>
                    <option value="USD">Dolar Amerykański</option>
                </select>
            </label>
        </p>
        <button className="form__button js-result">Przelicz</button>
    </fieldset>
    <div className="form__sum">
        <span className="js-sum"></span>
    </div>
</form>)
   
};

export default Form;