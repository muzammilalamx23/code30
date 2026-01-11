import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginTop: "20px" }}>
      <h2>Counter Component</h2>

      {/* Display count */}
      <h3>Count: {count}</h3>

      {/* Buttons */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <hr />

      {/* Input field */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Live input value: {text}</p>
    </div>
  );
}
