import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Счётчик: {count}</h2>
      <button
        onClick={() => setCount(prev => prev + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          background: "#4CAF50",
          color: "white",
        }}
      >
        [+]
      </button>
    </div>
  );
};

export default Counter;
