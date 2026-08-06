import React from "react";

const JobCounter = () => {
   let jobCount = 0;
   //regular variable - react will not re-render when this changes

   const handleAddJob = () => {
     jobCount = jobCount + 1;
     console.log("New job count:", jobCount);
     //this will increase in the console every click.
   };

   return (
    <div>
        <h1>Job counter</h1>
        <p>Current Jobs: {jobCount}</p>
        <button onClick={handleAddJob}>Add Job</button>
        </div>
   );
};

export default JobCounter;