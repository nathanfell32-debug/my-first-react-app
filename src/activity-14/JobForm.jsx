import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="company" />
            <input name="location" value={formData.location} onChange={handleChange} placeholder="location" />
            <input name="salary" value={formData.salary} onChange={handleChange} placeholder="salary" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="description" />
            
            {/* category buttons */}
            <div>
                <button type="button" onClick={() => handleCategorySelect("full-time")}>Full-time</button>
                <button type="button" onClick={() => handleCategorySelect("part-time")}>Part-time</button>
                <button type="button" onClick={() => handleCategorySelect("contract")}>Contract</button>
            </div>

            {/* status dropdown */}
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="start">Start</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            
            <button type="submit">Add Job</button>
        </form>
      );
}

export default JobForm;