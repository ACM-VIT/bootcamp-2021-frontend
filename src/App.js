import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import Accordion from "./components/Faqs/Accordion";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
