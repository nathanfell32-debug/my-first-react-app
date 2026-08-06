import React from "react";
// React must be imported because JSX is turned into React function calls behind the scenes.
const JobBoard = () => {
    //this defines a functional component called JobBoard
    //everything inside this function belongs to the component.

const companyName = "TechCorp";
//a simple string variable. JSX can display this using {companyName}

const jobCount = 5;
//a number variable. changing this number will change the message shown on the screen.

const getJobMessage = () => {
    //this function decides what message to show based on jobCount.
    //functions inside components are common in react.
    if (jobCount === 0) {
        //if jobCount is exactly 0, return this message.
        return "No jobs to schedule today";
    } else {
        //otherwise, return a dynamic message using a template literal.
        //template literals use backticks (`) and allow variables inside the string.
      return `Jobs running today from bot: ${jobCount}`;
    }
  };

  return (
    <div>
      {/* JSX expression: this displays the companyName variable */}
      <h1>{companyName}</h1>

      {/* JSX expression: this calls the function and displays its returned message */}
      <p>{getJobMessage()}</p>

      {/* Bonus: simple calculation inside JSX */}
      <p>
        Expected jobs next week: {jobCount * 1.5}
        {/* This multiplies jobCount by 1.5 directly inside JSX */}
     </p>
   </div>
  );
};

export default JobBoard;
//this makes the component available for import in app.js