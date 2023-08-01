import React, { useEffect, useState } from "react"; 
import { StyledClock } from "./styled" 

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
    const [date, setDate] = useState(new Date()); 

    useEffect (() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return  () => {
            clearInterval(intervalId);
        };
    }, []);
        
    return (
        <StyledClock>
            Dzisiaj jest {" "}
            {formattedDate(date)}
        </StyledClock>
    );
};

export default Clock;