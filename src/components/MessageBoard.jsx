import React, { useState } from 'react';
function MessageBoard() {
  const [Messages, setMessages] = useState([]);
  const [newMessage, setnewMessage] = useState('');
  
  const handleAddmessage = () => {
    if (newMessage.trim() !== '')
    {
      setMessages([...Messages, newMessage]);
      setnewMessage('');
    }
  };

  const handleDeleteMessage = (index) => {
    setMessages(Messages.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(e) => setnewMessage(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleAddmessage}>Submit</button>
      </div>
      <div className="board">
        {Messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={() => handleDeleteMessage(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
