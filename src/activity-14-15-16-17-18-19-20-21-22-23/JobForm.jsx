import { useState } from "react";

function JobForm({ onAddJob }) {
  const [activity, setActivity] = useState("");
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("Need to Complete");

  function handleCategoryChange(e) {
    const value = e.target.value;

    if (categories.includes(value)) {
      setCategories(categories.filter(c => c !== value));
    } else {
      setCategories([...categories, value]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newJob = {
      id: crypto.randomUUID(),
      activity,
      categories,
      status
    };

    onAddJob(newJob);

    setActivity("");
    setCategories([]);
    setStatus("Need to Complete");
  }

  return (
    <form
     onSubmit={handleSubmit}
     style={{
       display: "flex",
       flexDirection: "column",
       gap: "10px",
       padding: "15px",
       border: "1px solid #ddd",
       borderRadius: "8px",
       backgroundColor: "#f9f9f9"
     }}>
      <input
      type="text"
      placeholder="Job activity"
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc"
      }}
    />

    <div style={{ display: "flex", gap: "10px" }}>
      <label>
        <input
        type="checkbox"
        value="Read Emails"
        checked={categories.includes("Read Emails")}
        onChange={handleCategoryChange}
      />
      Read Emails
      </label>

      <label>
        <input
        type="checkbox"
        value="Send Emails"
        checked={categories.includes("Send Emails")}
        onChange={handleCategoryChange}
      />
      Send Emails
      </label>

      <label>
        <input
        type="checkbox"
        value="Web Parsing"
        checked={categories.includes("Web Parsing")}
        onChange={handleCategoryChange}
      />
      Web Parsing
      </label>
    </div>

    <select value={status} onChange={(e) => setStatus(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc"
      }}
    >
      <option>Need to Complete</option>
      <option>In Progress</option>
      <option>Completed</option>
    </select>

    <button type="submit"
    style={{
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    }}
    >
      Add Job
      </button>
    </form>
  );
}

export default JobForm;