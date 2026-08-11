import "./JobColumn.css";

function JobColumn({ title, image, jobs }) {
    return (
        <div className="job-column">
        <img src={image} alt={title} className="column-image" />
        <h2 className="column-title">{title}</h2>

        <div className="column-list">
            {jobs.length === 0 && <p>No jobs here yet.</p>}

            {jobs.map(job => (
                <div key={job.id} className="job-item">
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                </div>
            ))}
        </div>
      </div>
    );
}

export default JobColumn;