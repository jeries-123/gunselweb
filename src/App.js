import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Info from "./components/Info";
import HospitalPage from "./components/HospitalPage";
import Veterinary from "./components/Veterinary";
import Dentistry from "./components/dentistry";
import Innovation from "./components/Innovation";
import Museum from "./components/Museum";
import Library from "./components/library";
import Gunsel from "./components/gunsel";
import Arts from "./components/arts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/veterinary" element={<Veterinary />} />
        <Route path="/dentistry" element={<Dentistry />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/library" element={<Library />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/gunsel" element={<Gunsel />} />
        <Route path="/arts" element={<Arts />} />
      </Routes>
    </Router>
  );
}

export default App;
