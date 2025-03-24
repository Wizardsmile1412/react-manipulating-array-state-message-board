import { useState } from "react";


function MessageBoard() {
const [textInput, setTextInput] = useState("");
const [blog, setBlog] = useState([]);

function handleTextInput(e) {
  setTextInput(e.target.value);
}

function handleMsg(e) {
  e.preventDefault()
  const newblog = [...blog, textInput];
  setBlog(newblog);
  setTextInput("")
}

function handleDelete(indexToRemove){
  // const newBlog = blog.filter((_,index)=> index !== indexToRemove);
  // setBlog(newBlog);

  setBlog((prevBlog) => prevBlog.filter((_, index) => index !== indexToRemove));
}

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
            value={textInput}
            onChange={handleTextInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleMsg}>Submit</button>
      </div>

      <div class="board">
        {blog.map((blogItem, index)=> {
        return(
        <div className="message" key={index}>
          <h1>{blogItem}</h1>
          <button className="delete-button" onClick={() => handleDelete(index)}
          >x</button>
        </div>
        )})}
      </div>

    </div>
  );
}

export default MessageBoard;
