import React from "react";
import About from "./containers/About/about";
import Features from "./containers/Features/features";
import Perks from "./containers/Perks/perks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About />
      <Features />
      <Perks />
    </div>
  );
}

export default App;
