import React from "react";
import Button from "./Button";

const ModuleHandling =() =>{
    const handleClick =() =>{
        console.log("Clicked!!!!!!!");
    }
    const showAlert =() =>{
        alert("Clicked!!!!!!!");
    }
    return (
        <div>
             <Button onClick={showAlert} text ="ReadMore"></Button>
            <Button onClick={handleClick} text ="Click!!"></Button>
        </div>
    );
}

export default ModuleHandling;