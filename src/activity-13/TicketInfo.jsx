import { useState } from "react";

const TicketInfo = ({ result, image, children }) => {

    //bonus challenge toggle extra details
    const [showDetails, setShowDetails] = useState(false);

    const style = {
        border: "2px solid #ccc",
        padding: "20px",
        width: "200px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor:
        result === "completed"
        ? "#d1ffd6"
        : result === "in-progress"
        ? "#ffe9a8"
        : "#ffd1d1",
    cursor: "pointer",

    // bonus challenge smooth animation
    transition: "background-color 0.4s ease"
    };

    return (
        <div style={style} onClick={() => setShowDetails(!showDetails)}>
            <img src={image} alt={result} style={{ width: "80px" }} />
            <h3>{children}</h3>

            {/* bonus challenge details appear when clicked */}
            {showDetails && (
                <p style={{ marginTop: "10px" }}>
                    More details about: <strong>{children}</strong>
                </p>
            )}
        </div>
    );
};

export default TicketInfo;