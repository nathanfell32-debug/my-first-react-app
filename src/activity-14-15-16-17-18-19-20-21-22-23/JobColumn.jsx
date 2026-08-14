import JobCard from "./JobCard";

function JobColumn({ title, status, jobs, deleteJob }) {

    const filteredJobs = jobs.filter(job => job.status === status);

    return (
        <div style={{
             flex: 1,
             border: "1px solid #ccc",
             padding: "15px",
             borderRadius: "8px",
             backgroundColor: "#fdfdfd"
         }}>
            <h2 style={{ textAlign: "center" }}>{title}</h2>

            {filteredJobs.length === 0 && (
            <p style={{ textAlign: "center", color: "#777" }}>No Jobs</p>
        )}

            {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} deleteJob={deleteJob} />
            ))}
        </div>
    );
}

export default JobColumn;