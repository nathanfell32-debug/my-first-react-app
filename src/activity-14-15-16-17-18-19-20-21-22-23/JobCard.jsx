function JobCard({ job, deleteJob }) {
    return (
      <div
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px",
            backgroundColor: "#fafafa",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"
        }}
    >
        <p><strong>Activity:</strong> {job.activity}</p>
        <p><strong>Categories:</strong> {job.categories.join(", ")}</p>

        <button
        onClick={() => deleteJob(job.id)}
        style={{
            marginTop: "10px",
            padding: "6px 10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          >Delete</button>
    </div>
    );
}

export default JobCard;