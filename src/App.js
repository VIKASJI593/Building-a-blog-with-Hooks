import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <div className="App" style={{ padding: 10 }}>
      <input value={email} onChange={handleChange} />

      <input value={name} onChange={handleChangeName} />
      <p>Email:{email}</p>
      <p>Name:{name}</p>
    </div>
  );
}
export default App;
