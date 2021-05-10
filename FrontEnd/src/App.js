import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js";

import logo from "./logo.svg";
import LogInC from "./Components/LogInC";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
      .catch((err) => err);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div
      style={{ marginTop: 40, height: "100vh" }}
      className="d-flex flex-row justify-content-center align-items-stretch"
    >
      <div
        style={{ width: "600px" }}
        className="d-flex flex-column justify-content-center "
      >
        <p>Welcome to Tira Academics</p>
      </div>
      <div className="d-flex flex-column justify-content-center ">
        <LogInC />
      </div>
    </div>
  );
}

export default App;
