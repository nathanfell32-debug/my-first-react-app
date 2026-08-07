import React, { useState } from "react";

const BotListManager = () => {
    const [bots, setBots] = useState([
        { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
        { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
        { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
    ]);

    const triggerJob = (id) => {
        setBots((prevBots) =>
           prevBots.map((bot) =>
              bot.id === id
                ? { ...bot, status: "Running" }
                : bot
            )
        );
    };

    const getStatusStyle = (status) => {
        if (status === "Running") return { color: "green", fontWeight: "bold" };
        if (status === "Stopped") return { color: "red", fontWeight: "bold" };
        if (status === "Completed") return { color: "blue", fontWeight: "bold" };
        return {};
    };

    return (
        <div className="bot-list-manager">
            <h1>Bot List Manager</h1>

            <ul>
                {bots.map((bot) => (
                    <li key={bot.id} style={{ marginBottom: "15px" }}>
                        <p><strong>ID:</strong> {bot.id}</p>
                        <p><strong>Name:</strong> {bot.name}</p>
                        <p><strong>Task:</strong> {bot.task}</p>
                        <p style={getStatusStyle(bot.status)}>
                            <strong>Status:</strong> {bot.status}
                        </p>

                        <button onClick={() => triggerJob(bot.id)}>
                            Trigger Job
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BotListManager;