import React from "react";
import About from "./containers/About/about";
import Features from "./containers/Features/features";
import Perks from "./containers/Perks/perks";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import Accordion from "./components/Faqs/Accordion";
import Footer from "./components/Footer/Footer";
import Workshop from "./components/Workshop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Workshop />
      <Features />
      <Perks />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
