import "./JobColumn.css";

function JobColumn({ title, image, jobs, onDelete, onStatusChange }) {
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

                    <div className="job-actions">
                        <button
                        className="move-button"
                        onClick={() => {
                            if (job.status === "start") onStatusChange(job.id, "in-progress");
                            else if (job.status === "in-progress") onStatusChange(job.id, "completed");
                        }}
                    >
                        Move Forward
                    </button>

                    <button
                    className="delete-button"
                    onClick={() => onDelete(job.id)}
                    >
                        Delete
                    </button>
                </div>
              </div>  
            ))}
        </div>
      </div>
    );
}

export default JobColumn;