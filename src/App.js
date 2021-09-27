import React from "react";
import ReactDOM from "react-dom";
import logo from "./img/logo.png";
import Even from "./components/even";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} />
      <Even/>
     
    </div>
  );
}

export default App;
