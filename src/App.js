//----------------useEffect hook---------------------------
import React, { useState, useEffect } from "react";

function App(props) {
  const [userId, setUserid] = useState("1");
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId =${userId}";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data);
      });
  }, [userId]);

  useEffect(() => {
    document.addEventListener('mousemove',onmouseMove);
  });
  function onmouseMove(event) {
    console.log(event.clientX);
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>App</h1>
      <button onClick={() => setUserid("2")}>Change user id to 2 </button>
      {data.map((user) => (
        <div>
          <p>Name:{user.title}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
