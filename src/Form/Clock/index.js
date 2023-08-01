import React, { useEffect, useState } from "react"; 
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
        <Wrapper>
            Dzisiaj jest {" "}
            {formattedDate(date)}
        </Wrapper>
    );
};

export default Clock;