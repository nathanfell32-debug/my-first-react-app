import React from "react";

const StyledButton = () => {
    //this defines the component. everything inside belongs to StyledButton.
    const isDisabled = false;
    //this variable controls whether the button is disabled.
    //change it to true to see the button become disabled.

    //inline style object for the heading
    //React uses camelCase for CSS properties (background colour, text align)
    const headingStyle = {
        textAlign: "center",   //centers the text
        color: "white",        //text colour
        backgroundColor: "black",    //background colour
        padding: "10px"      //adds spacing inside the heading
    };
    //inline style objects for the button.
    const buttonStyle = {
        padding: "10px 20px",   //adds space inside the button
        backgroundColor: "blue",   //button background colour
        color: "white",     //button text colour
        border: "2px solid black",   //button border
        borderRadius: "8px",  //rounded corners
        cursor: "pointer"    //makes the cursor a pointer when hovering
    };

    return (
        <div>
            {/* Styled heading using the style object */}
            <h1 style={headingStyle}>Styled React Button</h1>

           
            {/* Styled button with conditional disabled attributes */}
            <button
            style={buttonStyle}    //apply inline styles
            disabled={isDisabled}   //button becomes disabled if disabled is true
            className="my-button"   //JSX uses className instead of class  
          >
            Click Me
           </button>
           </div>
    );
};

export default StyledButton;