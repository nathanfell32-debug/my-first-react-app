import JobItem from "./JobItem";

const JobList = ({ jobs, deleteJob }) => {
    return (
        <div>
            {jobs.map((job) => (
                <JobItem key={job.id} job={job} deleteJob={deleteJob} />
            ))}
        </div>
    );
};

export default JobList;