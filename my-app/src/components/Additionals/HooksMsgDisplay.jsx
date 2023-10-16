import React, { useState, useEffect } from "react";

const HooksMsgDisplay = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = `Hello, ${name}`;
    }, [name]);

    const handleNameChange = (event) => {

        setName(event.target.value);
    };

    const handleButtonClick = () => {
        setMessage(`Hello, ${name}!`);
    };

    return (
        <div>
            <label>Enter ur name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
            <button onClick={handleButtonClick}>Click</button>
            <p>{message}</p>

        </div>
    );
};

export default HooksMsgDisplay;