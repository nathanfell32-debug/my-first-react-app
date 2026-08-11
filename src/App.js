import React from "react";
import { useState } from "react";
import JobForm from "./activity-14-15-16/JobForm";
import JobColumn from "./activity-14-15-16/JobColumn";

import startIcon from "./activity-14-15-16/icons8-play-button-48.png";
import progressIcon from "./activity-14-15-16/icons8-in-progress-50.png";
import completeIcon from "./activity-14-15-16/icons8-task-completed-48.png";

function App() {
  const [jobs, setJobs] = useState([]);

  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  function deleteJob(id) {
    setJobs(jobs.filter(job => job.id !== id));
  }

  function updateJobStatus(id, newStatus) {
    setJobs(
      jobs.map(job =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  }

  const needToStart = jobs.filter(job => job.status === "start");
  const inProgress = jobs.filter(job => job.status === "in-progress");
  const completed = jobs.filter(job => job.status === "completed");

  return (
    <div>
      <h1>Job Management App</h1>

      <JobForm onAddJob={handleAddJob} />
      
      <div className="column-container">
        <JobColumn
        title="Need to start"
        image={startIcon}
        jobs={needToStart}
        onDelete={deleteJob}
        onStatusChange={updateJobStatus}
      />
        <JobColumn
        title="In Progress"
        image={progressIcon}
        jobs={inProgress}
        onDelete={deleteJob}
        onStatusChange={updateJobStatus}
      />
        <JobColumn
        title="Completed"
        image={completeIcon}
        jobs={completed}
        onDelete={deleteJob}
        onStatusChange={updateJobStatus}
      />
      </div>
    </div>
  );
}
export default App;
