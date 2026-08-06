import React from "react";

function VariableDisplay() {
    // Variables
    let stringVar = "Welcome to React";
    let numberVar = 42;
    let booleanVar = true;
    let arrayVar = ["React", "JSX", "Variables"];
    let objectVar = {
        name: "Nathan",
        age: 30,
        role: "Developer"
    };

    // conditional statement
    if (Math.random() > 0.5) {
        stringVar = "Welcome to advanced React";
    }

    // helper function bonus challenge
    const renderMessage = () => {
        return <p>This message is returned from a function!</p>;
    };

    return (
        <div>
            <h1>{stringVar}</h1>
            <p>Number: {numberVar}</p>
            <p>Boolean (won't render directly): {booleanVar.toString()}</p>
            <p>Array: {arrayVar.join(", ")}</p>
            <p>Object name: {objectVar.name}</p>
            <p>Object age: {objectVar.age}</p>
            <p>Object role: {objectVar.role}</p>
            {renderMessage()}
          </div>
        );
    }
    
    export default VariableDisplay;