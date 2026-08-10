import React from "react";
import { useState } from "react";
import JobForm from "./activity-14/JobForm";

function App() {
  const [jobs, setJobs] = useState([]);

  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  return (
    <div>
      <h1>Job Management App</h1>

      <JobForm onAddJob={handleAddJob} />

      <h2>Jobs Added:</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong>> - {job.company}, {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
