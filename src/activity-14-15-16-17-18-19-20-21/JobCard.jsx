function JobCard({ job }) {
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
        <p><strong>Activity:</strong> {job.activty}</p>
        <p><strong>Categories:</strong> {job.categories.join(", ")}</p>
    </div>
    );
}

export default JobCard;