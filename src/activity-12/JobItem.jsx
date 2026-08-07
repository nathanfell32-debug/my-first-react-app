import { useState } from "react";

const JobItem = ({ job, onDeleteJob, onEditJob }) => {

     //bonuis challenge edit job feature
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(job.name);

    //bonus challenge error handling
    if (!job) {
        return (
            <div style={{ background: "#ffcccc", padding: "10px" }}>
                Error: Job data missing
            </div>
        );
    }
    const style = {
        backgroundColor: job.status === "completed" ? "#d1ffd6" : "#ffe9a8",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px"
    };

  const saveEdit = () => {
    onEditJob(job.id, text);
    setIsEditing(false);
  };

  return (
    <div style={style}>
      {isEditing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{job.name}</h3>
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

      <p>Status: {job.status}</p>

      <button onClick={() => onDeleteJob(job.id)}>
        Delete
      </button>
    </div>
  );
};

export default JobItem;