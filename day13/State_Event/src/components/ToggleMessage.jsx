import { useState } from "react";

function ToggleMessage() {
  // Boolean state for message
  const [showMessage, setShowMessage] = useState(false);

  // Boolean state for list
  const [showList, setShowList] = useState(false);

  // List state
  const [items] = useState(["Learn React", "Practice State", "Build Projects"]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Toggle Message</h2>

      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>


      {showMessage ? <p>This message is now visible </p> : null}


      <h2>Toggle List</h2>

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

    
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleMessage;
