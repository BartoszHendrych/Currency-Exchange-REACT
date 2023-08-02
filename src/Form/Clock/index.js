import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled" 

const formattedDate = (date) => 
    date.toLocaleString(undefined,
        {
            month: "long", weekday: "long",
            day: "numeric", year: "numeric",
            hour: "numeric", minute: "numeric",
            second: "numeric"
        }
    );

const Clock = () => {
    const date = useCurrentDate(null);
    return (
        <Wrapper>
            Dzisiaj jest {" "}
            {formattedDate(date)}
        </Wrapper>
    );
};

export default Clock;