import React, { useState, useEffect } from "react";

const HooksEx = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        fetchData();
    }, [count]);

    const fetchData = () => {
        setTimeout(() => {
            const newData = `Data for count ${count}`;
            setData(newData);
        }, 3000);
    };

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={incrementCount}>Increment</button>

            <p>{data ? data : 'Fetching...'}</p>


        </div>
    );
};

export default HooksEx;