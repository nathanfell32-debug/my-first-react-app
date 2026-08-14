import { useState } from "react";
import JobForm from "./JobForm";
import JobColumn from "./JobColumn";

function JobManager() {
    const [jobs, setJobs] = useState([]);

    function addJob(newJob) {
        setJobs([...jobs, newJob]);
    }
    function deleteJob(jobId) {
        setJobs(jobs.filter(job => job.id !== jobId));
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