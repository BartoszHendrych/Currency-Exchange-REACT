
const Result = ({ result }) => {
    return (
        <p>
           Wynik:{" "}
            { result && (
                <>
                    <strong>
                        {result.sourceAmount.toFixed(2)} PLN =&nbsp;
                        {result.targetAmount.toFixed(2)} {result.currency}
                    </strong>
                </>
            )}
        </p>
    )
}

export default Result;