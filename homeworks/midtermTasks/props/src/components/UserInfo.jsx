import React from "react";

const UserInfo = ({ name, age }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
      <p>Привет, меня зовут {name}, мне {age} лет</p>
    </div>
  );
};

export default UserInfo;
