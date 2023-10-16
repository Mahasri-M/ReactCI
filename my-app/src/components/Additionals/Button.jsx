import React from "react";
import './Button.css'

const Button =({onClick, text}) => {
    return <button id= "but" onClick={onClick}>{text}</button>
}
export default Button;