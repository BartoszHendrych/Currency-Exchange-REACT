import "./style.css";
import React, { useEffect, useState } from "react";  

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
        <div className="clock">
            Dzisiaj jest {" "}
            {formattedDate(date)}
        </div>
    );
};

export default Clock;