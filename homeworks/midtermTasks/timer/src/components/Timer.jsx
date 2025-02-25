import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Очищаем таймер при размонтировании
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Таймер: {seconds} сек.</h2>
      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          background: isRunning ? "#ccc" : "#4CAF50",
          color: "white",
          marginRight: "10px",
        }}
      >
        Старт
      </button>
      <button
        onClick={() => setIsRunning(false)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          background: "#f44336",
          color: "white",
        }}
      >
        Стоп
      </button>
    </div>
  );
};

export default Timer;
