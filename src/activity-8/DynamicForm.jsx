import React, { useState } from "react";

const DynamicForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();   //stop page refresh
        setSubmittedValue(inputValue);
        setInputValue("");  //clear input after submit
    };

    return (
        <div>
            <h1>Dynamic Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>

            {submittedValue && (
                <p>You submitted: <strong>{submittedValue}</strong></p>
            )}
        </div>
    );
};

export default DynamicForm;