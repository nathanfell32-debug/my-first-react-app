import { useState } from "react";
import "./AppForm.css";

function JobForm ({ onAddJob }) {
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        category: "",
        status: "start",
      });
    
      function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
      }
      function handleCategorySelect(category) {
        setFormData({
            ...formData,
            category,
        });
      }
      function handleSubmit(e) {
        e.preventDefault();

        if (!formData.title || !formData.category || !formData.status) {
            alert("Please fill in all required fields.");
            return;
        }

        onAddJob(formData);

        setFormData({
            title: "",
            company: "",
            location: "",
            salary: "",
            description: "",
            category: "",
            status: "start",
        });
      }

      return (
        <form onSubmit={handleSubmit} className="form-header">
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="bot-input" />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="company" className="bot-input" />
            <input name="location" value={formData.location} onChange={handleChange} placeholder="location" className="bot-input" />
            <input name="salary" value={formData.salary} onChange={handleChange} placeholder="salary" className="bot-input" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="description" className="form-details" />
            
            {/* category buttons */}
            <div className="bottom-line">
                <button type="button" className="tag" onClick={() => handleCategorySelect("full-time")}>Full-time</button>
                <button type="button" className="tag" onClick={() => handleCategorySelect("part-time")}>Part-time</button>
                <button type="button" className="tag" onClick={() => handleCategorySelect("contract")}>Contract</button>
            </div>

            {/* status dropdown */}
            <select name="status" value={formData.status} onChange={handleChange} className="job-status">
                <option value="start">Start</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            
            <button type="submit" className="submit-data">Add Job</button>
        </form>
      );
}

export default JobForm;