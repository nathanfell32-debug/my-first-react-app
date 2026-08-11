import React from "react";
import { useState } from "react";
import JobForm from "./activity-14-15-16/JobForm";
import JobColumn from "./activity-14-15-16/JobColumn";
import startIcon from "./activity-14-15-16/icons8-play-button-48.png";
import progressIcon from "./activity-14-15-16/icons8-in-progress-50.png";
import completeIcon from "./activity-14-15-16/icons8-task-completed-48.png";

function App() {
  const [jobs, setJobs] = useState([]);

  const needToStart = jobs.filter(job => job.status === "start");
  const inProgress = jobs.filter(job => job.status === "in-progress");
  const completed = jobs.filter(job => job.status === "completed");

  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  return (
    <div>
      <h1>Job Management App</h1>

      <JobForm onAddJob={handleAddJob} />
      
      <div className="column-container">
        <JobColumn
        title="Need to start"
        image={startIcon}
        jobs={needToStart}
      />
        <JobColumn
        title="In Progress"
        image={progressIcon}
        jobs={inProgress}
      />
        <JobColumn
        title="Completed"
        image={completeIcon}
        jobs={completed}
      />
      </div>
    </div>
  );
}
export default App;
