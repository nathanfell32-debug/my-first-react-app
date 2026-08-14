import { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobColumn from "./JobColumn";

//load jobs from localStorage on first render
function JobManager() {
    const [jobs, setJobs] = useState(() => {
        const savedJobs = localStorage.getItem("jobs");
        return savedJobs ? JSON.parse(savedJobs) : [];
    });

    //save jobs to localStorage whenever jobs change
    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);
// add a new job
    function addJob(newJob) {
        setJobs([...jobs, newJob]);
    }
    //delete a job
    function deleteJob(jobId) {
        setJobs(jobs.filter(job => job.id !== jobId));
    }
    // clear all jobs
    function clearAllJobs() {
        setJobs([]);
        localStorage.removeItem("jobs");
    }

    return (
        <div style={{
             padding: "20px",
             maxWidth: "1000px",
             margin: "0 auto",
             fontFamily: "Arial, sans-serif"
           }}>
            <h1 style={{ textAlign: "center" }}>Job Management UI</h1>

            <JobForm onAddJob={addJob} />
            <button
            onClick={clearAllJobs}
            style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "darkred",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}>Clear All Jobs</button>

            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px"
            }}>

            <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
            <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
            <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
           </div> 
        </div>
    );
}

export default JobManager;