import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Gallery from "./components/Gallery";
import LearnToEarn from "./components/LearnToEarn";
import Home from "./components/Home"; // create a Home component too
import "./App.css";


function App() {
  return (
  <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/learn-to-earn" element={<LearnToEarn />} />
      </Routes>
      </div>
  );
}

export default App;
