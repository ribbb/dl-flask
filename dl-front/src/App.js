import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [infer, setInfer] = useState(0);

  useEffect(() => {
    fetch("/infer")
      .then((res) => res.json())
      .then((data) => {
        setInfer(data.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Message from backend
        <p>The current time is {infer}.</p>
      </header>
    </div>
  );
}

export default App;
