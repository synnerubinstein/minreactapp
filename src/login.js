import React, { useState, useEffect } from "react";

function login() {
  const [userName, setUserName] = useState("");

  function handleClick() {
    localStorage.setItem("userName", userName);
  }

  useEffect(() => {
    const savedData = localStorage.getItem("userName");
    if (savedData) {
      setUserName(savedData);
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={handleClick}>log in</button>
    </div>
  );
}

export default login;
