import { useState } from "react";
import JobForm from "./activity-14-15-16-17-18-19-20-21/JobForm";
import JobColumn from "./activity-14-15-16-17-18-19-20-21/JobColumn";

function App() {
  const [jobs, setJobs] = useState([]);

  function handleAddJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  const needToStart = jobs.filter(job => job.status === "Need to Complete");
  const inProgress = jobs.filter(job => job.status === "In Progress");
  const completed = jobs.filter(job => job.status === "Completed");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Management App</h1>

      <JobForm onAddJob={handleAddJob} />

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <JobColumn title="Need to Complete" jobs={needToStart} />
        <JobColumn title="In Progress" jobs={inProgress} />
        <JobColumn title="Completed" jobs={completed} />
      </div>
    </div>
  );
}

export default App;