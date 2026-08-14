import { useState } from "react";

function CategorySelector() {   //selected category state
    const [selectedCategory, setSelectedCategory] = useState("");
// dynamic styles
    const categoryStyles = {
        readEmails: { backgroundColor: "orange" },
        sendEmails: { backgroundColor: "yellow" },
        webParsing: {backgroundColor: "blue" },
        default: {backgroundColor: "white" },
    };
//bonus challenge transition effect 
    const transitionStyle = {
        transition: "background-color 0.3s ease",
};
    const containerStyle = {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
    };
    const buttonRowStyle = {
        display: "flex",
        gap: "15px",
    };
    const baseButtonStyle = {
        padding: "10px 20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        cursor: "pointer",
    };
    const validateCategory = () => selectedCategory !== "";

    const categories = [
        { key: "readEmails", label: "Read Emails" },
        { key: "sendEmails", label: "Send Emails" },
        { key: "webParsing", label: "Web Parsing" },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={{ margin: 0 }}>Category Selector</h2>

            <div style={buttonRowStyle}>
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.key;

                    return (
                        <button
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        style={{
                            ...baseButtonStyle,
                            ...(isSelected
                              ? categoryStyles[cat.key]
                              : categoryStyles.default),
                            ...transitionStyle,   
                        }}
                      >
                        {cat.label}
                      </button>  
                    );
                })}
            </div>

            {/* bonus challenge reset */}
            <button
            onClick={() => setSelectedCategory("")}
            style={{
                ...baseButtonStyle,
                backgroundColor: "#eee",
            }}
          >
            Reset
            </button>  

            {/* validation */}
            <p style={{ fontSize: "14px" }}>
                Selected: {validateCategory() ? selectedCategory : "None"}
            </p>
        </div>
    );
}

export default CategorySelector;