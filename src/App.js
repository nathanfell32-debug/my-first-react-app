import React, { useState } from 'react';
import Header from "./activity-11/Header";
import Footer from "./activity-11/Footer";
import JobList from "./activity-11/JobList";


function App() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "running" },
    { id: 2, title: "Backend Engineer", status: "completed" },
    { id: 3, title: "UI Designer", status: "running" }
  ]);

  const [showJobs, setShowJobs] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  //add job
  const addJob = () => {
    const newJob = {
      id: jobs.length + 1,
      title: "New Job",
      status: "Running"
    };
    setJobs([...jobs, newJob]);
  };

  //delete job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  //filter jobs
  const filteredJobs = jobs.filter((job) =>
  job.title.toLowerCase().includes(searchTerm.toLowerCase())
);

   return (
    <div className="App">
      <Header />

    {/* search bar */}
    <input
      type="text"
      placeholder="Search jobs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {/* toggle button */}
    <button onClick={() => setShowJobs(!showJobs)}>
      {showJobs ? "Hide Jobs" : "Show Jobs"}
    </button>

    {/* add job */}
    <button onClick={addJob}>Add Job</button>

    {/* job list */}
    {showJobs && <JobList jobs={filteredJobs} deleteJob={deleteJob} />}
  
      <Footer />
    </div>
   );
}

export default App;
