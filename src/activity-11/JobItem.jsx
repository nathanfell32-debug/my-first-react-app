const JobItem = ({ job, deleteJob }) => {
    const style = {
        backgroundColor: job.status === "completed" ? "#d1ffd6" : "#ffe9a8",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px"
    };

    return (
        <div style={style}>
            <h3>{job.title}</h3>
            <p>Status: {job.status}</p>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
        </div>
    );
};

export default JobItem;