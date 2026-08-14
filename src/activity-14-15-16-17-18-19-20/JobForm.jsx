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
    //multi-select category state
    //stores all categories the user chooses for this job
      const [categories, setCategories] = useState([]);

      //error and success messages
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");

      //list of available categories (can be expanded later)
      const availableCategories = [
        "Remote",
        "Urgent",
        "Admin",
        "Tech",
        "Part-time",
        "Contract"
      ];

      //toggles a category on/off when clicked
      function handleCategoryToggle(cat) {
        if (categories.includes(cat)) {
          setCategories(categories.filter(c => c !== cat));  //remove
        } else {
          setCategories([...categories, cat]); //add
        }
      }
    //controlled input handler
      function handleInputChange(e) {
        setJobDetails({
          ...jobDetails,
          [e.target.name]: e.target.value
        });
      }
      //reset form fields
      function resetForm() {
        setJobDetails({
          title: "",
          company: "",
          location: "",
          salary: "",
          description: "",
          type: ""
        });
        setCategories([]); //bonus challenge also reset categories
      }
    //form submission handler
      function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");
        
    //validation: ensure all fields are filled
    const empty = Object.values(jobDetails).some(v => v.trim() === "");
    if (empty) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    // Bonus challenge ensure at least one category is selected
    if (categories.length === 0) {
      setError("Please select at least one category.");
      return;
    }

    // Validation: title length
    if (jobDetails.title.length < 3) {
      setError("Job title must be at least 3 characters long.");
      return;
    }

    //build job object 
    const newJob = {
      ...jobDetails,
      categories,
        id: crypto.randomUUID(),
        status: "start"
    };
  //send job to parent component
    onAddJob(newJob);
  //success message
    setSuccess("Job successfully added!");
  //reset form
    resetForm();
}  

      return (
        <form onSubmit={handleSubmit} className="form-header">
            <input
            type="text"
            name="title"
            placeholder="job title"
            value={jobDetails.title}
            onChange={handleInputChange}
            className="bot-input"
          />
            <input
            type="text"
            name="company"
            placeholder="Company"
            value={jobDetails.company}
            onChange={handleInputChange}
            className="bot-input"
          />
            <input
            type="text"
            name="location"
            placeholder="location"
            value={jobDetails.location}
            onChange={handleInputChange}
            className="bot-input"
          />
            <input
            type="text"
            name="salary"
            placeholder="salary"
            value={jobDetails.salary}
            onChange={handleInputChange}
            className="bot-input"
          />
            <textarea
            name="description"
            placeholder="description"
            value={jobDetails.description}
            onChange={handleInputChange}
            className="form-details"
          />     
            <select
            name="type"
            value={jobDetails.type}
            onChange={handleInputChange}
            className="job-status"
           >    
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        {/* multi select category buttons */}
        <div className="bottom-line">
          {availableCategories.map(cat => (
            <button
            key={cat}
            type="button"
            className={`tag ${categories.includes(cat) ? "selected" : ""}`}
            onClick={() => handleCategoryToggle(cat)}
          >
            {cat}
          </button>  
          ))}
        </div>

        {/* display selected categories */}
        <div>
          <strong>Selected:</strong> {categories.join(", ") || "none"}
        </div>

        {/* bonus challenge clear all selected categories */}
        <button
        type="button"
        onClick={() => setCategories([])}
        className="submit-data"
      >
        Clear categories
        </button> 

        {/*error and success messages */} 
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}  

          <button type="submit" className="submit-data">
            Add Job
            </button>
        </form>
      );
}

export default JobForm;