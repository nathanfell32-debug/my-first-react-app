import { useState } from "react";
import JobForm from "./JobForm";
import JobColumn from "./JobColumn";

function JobManager() {
    const [jobs, setJobs] = useState([]);

    function addJob(addJob) {
        setJobs([...jobs, addJob]);
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

            <JobColumn title="Need to complete" status="Need to complete" jobs={jobs} />
            <JobColumn title="In Progress" status="In Progress" jobs={jobs} />
            <JobColumn title="Completed" status="Completed" jobs={jobs} />
           </div> 
        </div>
    );
}

export default JobManager;