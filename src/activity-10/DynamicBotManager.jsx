import React, { useState } from "react";

const DynamicBotManager = () => {
    const [bots, setBots] = useState([
        { id: '1', name: 'Email Bot', status: 'Active' },
        { id: '2', name: 'Data Bot', status: 'Inactive' }
    ]);

    const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });
    const [editingBotId, setEditingBotId] =useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    //update newBot as user types
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBot({ ...newBot, [name]: value });
    };

    //add new bot to list
    const addBotToList = () => {
        const { id, name, status } = newBot;


   // bonus challenge validation
        if (!id.trim() || !name.trim() || !status.trim()) {
            alert('Please fill in all fields');
            return;
        }

        setBots([...bots, newBot]);

        //clear inputs
        setNewBot({ id: '', name: '', status: '' });
    };

    //delete bot using filter
    const deleteBot = (id) => {
        setBots(bots.filter((bot) => bot.id !== id));
    };
    //bonnus challenge save edited bot
    const saveEditedBot = (id, field, value) => {
        const updatedBots = bots.map((bot) =>
        bot.id === id ? { ...bot, [field]: value } : bot
    );
    setBots(updatedBots);
    };

    //bonus challenge filter bots
    const filteredBots = bots.filter((bot) =>
    bot.name.toLowerCase().includes(searchTerm.toLowerCase())
);
    return (
        <div className="dynamic-bot-manager">
            <h1>Dynamic Bot Manager</h1>
            
            {/* search bar */}
            <input
            type="text"
            placeholder="search bots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

            {/* Input fields */}
          <input
            type="text"
            name="id"
            placeholder="Bot ID"
            value={newBot.id}
            onChange={handleInputChange}
        />

          <input
            type="text"
            name="name"
            placeholder="Bot ID"
            value={newBot.id}
            onChange={handleInputChange}
        />

          <input
          type="text"
          name="status"
          placeholder="Bot Name"
          value={newBot.name}
          onChange={handleInputChange}
        />

        <button onClick={addBotToList}>Add Bot</button>

        {/* Display bots */}
      <ul>
        {filteredBots.map((bot) => (
          <li key={bot.id}>
            {editingBotId === bot.id ? (
              <>
                {/* Edit mode */}
                <input
                  type="text"
                  value={bot.name}
                  onChange={(e) => saveEditedBot(bot.id, "name", e.target.value)}
                />
                <input
                  type="text"
                  value={bot.status}
                  onChange={(e) =>
                    saveEditedBot(bot.id, "status", e.target.value)
                  }
                />
                <button onClick={() => setEditingBotId(null)}>Save</button>
              </>
            ) : (
              <>
                {/* Normal display */}
                {bot.id} - {bot.name} ({bot.status})
                <button onClick={() => deleteBot(bot.id)}>Delete</button>
                <button onClick={() => setEditingBotId(bot.id)}>Edit</button>
              </>
            )}
          </li>
          ))}
            </ul>
        </div>
    );
};

export default DynamicBotManager;