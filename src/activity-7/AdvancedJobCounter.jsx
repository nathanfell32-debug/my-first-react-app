import React, { useState } from "react";

const AdvancedJobCounter = () => {
    const [jobCount, setJobCount] = useState(0);

    const handleAddJob = () => {
        setJobCount(jobCount + 1);
    };

    const handleRemoveJob = () => {
        if (jobCount > 0) {
            setJobCount(jobCount - 1);
        }
    };

    const handleResetJobs = () => {
        setJobCount(0);
    };

    const getMessage = () => {
        if (jobCount === 0) return "No jobs available";
        if (jobCount >= 1 && jobCount <= 5) return "Few jobs available";
        return "Many jobs available";
    };

    return (
        <div>
            <h1>Advanced Job Counter</h1>
            <p>Current Jobs: {jobCount}</p>

            <button onClick={handleAddJob}>Add Job</button>
            <button onClick={handleRemoveJob}>Remove Job</button>
            <button onClick={handleResetJobs}>Reset</button>

            <p>{getMessage()}</p>
        </div>
    );
};

export default AdvancedJobCounter;