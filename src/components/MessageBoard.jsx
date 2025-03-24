import { useState } from "react";




function MessageBoard() {

  const [message, setMessage] = useState("")
  const [messageText, setMessageText] = useState([])


  const addMessage = (e) => {
    e.preventDefault()
    let newMesageText = [...messageText, message]
    setMessageText(newMesageText)
    setMessage("")
  }

  const deleteMessage = (index) => {
    let newMessageText = messageText.filter((_, i) => {
      return i !== index
    })
    setMessageText(newMessageText)
  }




  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={message}
            placeholder="Enter message here"
            onChange={(e)=> setMessage(e.target.value)}
          />
        </label>
        <button className="submit-message-button"
        onClick={addMessage}
        type="button">Submit</button>
      </div>
      {messageText.map((m, index)=> {
        return (<div className="board"
        key={index}>
        <div className="message">
          <h1>{m}</h1>
          <button className="delete-button"
          onClick={ () => deleteMessage(index)}
          type="button">x</button>
        </div>
      </div>)
      
      
      })}
      </form>
    </div>
  );
}

export default MessageBoard;
