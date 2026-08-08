import { useState } from "react";
import TicketInfo from "./TicketInfo";
import completedImg from "./icons8-checkmark-yes-64.png";
import progressImg from "./icons8-in-progress-50.png";
import failedImg from "./icons8-failed-64.png";

const StatusBoard = () => {

    // bonus challenge Store tickets
    const [tickets, setTickets] = useState([
        { id: 1, status: "completed" },
        { id: 2, status: "in-progress" },
        { id: 3, status: "failed" }
    ]);

    // bonus challenge Add new ticket
    const addTicket = (status) => {
        setTickets([
            ...tickets,
            { id: Date.now(), status }
        ]);
    };

    // bonus challenge Count tickets by status
    const completedCount = tickets.filter(t => t.status === "completed").length;
    const progressCount = tickets.filter(t => t.status === "in-progress").length;
    const failedCount = tickets.filter(t => t.status === "failed").length;

    return (
        <div>

            {/* BONUS CHALLENGE Add ticket form */}
            <div style={{ marginBottom: "20px" }}>
                <select id="newTicketStatus">
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="failed">Failed</option>
                </select>
                <button
                    onClick={() => {
                        const status = document.getElementById("newTicketStatus").value;
                        addTicket(status);
                    }}
                >
                    Add Ticket
                </button>
            </div>

            <div style={styles.board}>
                <TicketInfo result="completed" image={completedImg}>
                    Completed Tickets ({completedCount}) {/* BONUS CHALLENGE  */}
                </TicketInfo>

                <TicketInfo result="in-progress" image={progressImg}>
                    In Progress Tickets ({progressCount}) {/* BONUS CHALLENGE  */}
                </TicketInfo>

                <TicketInfo result="failed" image={failedImg}>
                    Failed Tickets ({failedCount}) {/* BONUS CHALLENGE  */}
                </TicketInfo>
            </div>
        </div>
    );
};

const styles = {
    board: {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "30px"
    }
};

export default StatusBoard;