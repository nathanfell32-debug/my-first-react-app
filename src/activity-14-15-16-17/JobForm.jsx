import { useState } from "react";
import "./JobForm.css";

function JobForm ({ onAddJob }) {
    const [jobDetails, setJobDetails] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        type: "",
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");

      function handleInputChange(e) {
        const { name, value } = e.target;

        setJobDetails(prev => ({
            ...prev,
            [name]: value
        }));

        setError("");
        setSuccess("");
      }

      function handleSubmit(e) {
        e.preventDefault();
        
    //validation 
    const fields = Object.values(jobDetails);
    const empty = fields.some(field => field.trim() === "");

    if (empty) {
        setError("Please fill in all fields before submitting.");
        return;
    }

    if (jobDetails.title.length < 3) {
        setError("Job title must be at least 3 characters long.");
        return;
    }

    //build job object 
    const newJob = {
        id: crypto.randomUUID(),
        ...jobDetails,
        status: "start"
    };

    console.log("job added:", newJob);

    onAddJob(newJob);

    setSuccess("Job successfully added!");

    resetForm();
}  

    function resetForm() {
        setJobDetails({
            title: "",
            company: "",
            location: "",
            salary: "",
            description: "",
            type: "",
        });
      }

      return (
        <form onSubmit={handleSubmit} className="form-header">
            <input
            type="text"
            name="title"
            placeholder="job title"
            value={jobDetails.title}
            onChange={handleInputChange}
          />
            <input
            type="text"
            name="company"
            placeholder="Company"
            value={jobDetails.company}
            onChange={handleInputChange}
          />
            <input
            type="text"
            name="location"
            placeholder="location"
            value={jobDetails.location}
            onChange={handleInputChange}
          />
            <input
            type="text"
            name="salary"
            placeholder="salary"
            value={jobDetails.salary}
            onChange={handleInputChange}
          />
            <textarea
            name="description"
            placeholder="description"
            value={jobDetails.description}
            onChange={handleInputChange}
          />     
            <select
            name="type"
            value={jobDetails.type}
            onChange={handleInputChange}
           >    
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}  

          <button type="submit" disabled={
            Object.values(jobDetails).some(v => v.trim() === "")
          } className="submit-data">
            Add Job
            </button>
        </form>
      );
}

export default JobForm;