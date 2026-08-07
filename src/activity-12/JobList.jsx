import JobItem from "./JobItem";

const JobList = ({ jobs, onDeleteJob, onEditJob }) => {
    return (
        <div>
            {jobs.map((job) => (
              <JobItem
               key={job.id}
               job={job}
               onDeleteJob={onDeleteJob}
               onEditJob={onEditJob} //bonus challenge
            /> 
          ))}
        </div>
    );
};

export default JobList;