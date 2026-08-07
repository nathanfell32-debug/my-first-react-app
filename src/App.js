import React, { useState } from 'react';
import JobList from "./activity-12/JobList";


function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: "Frontend Developer", status: "running" },
    { id: 2, name: "Backend Engineer", status: "completed" },
    { id: 3, name: "UI Designer", status: "running" }
  ]);

  //bonus challenge edit job feature
  const handleEditJob = (id, newName) => {
    setJobs(
      jobs.map((job) =>
      job.id === id ? { ...job, name: newName } : job
    )
  );
};

  //delete job
  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  //bonus challenge filter by status
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    if (statusFilter === "all") return true;
    return job.status === statusFilter;
  });

   return (
    <div className="App">
      <h1>Activity 12 - Job Board with props</h1>
      {/* bonus challenge Filter dropdown */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="running">Running</option>
        <option value="completed">Completed</option>
      </select>

      <JobList
        jobs={filteredJobs}
        onDeleteJob={handleDeleteJob}
        onEditJob={handleEditJob}   // BONUS CHALLENGE 2
      />
    </div>
   );
}

export default App;
