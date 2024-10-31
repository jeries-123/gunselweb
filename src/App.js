import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../src/components/MainPage';
import Info from '../src/components/Info';
import HospitalPage from '../src/components/HospitalPage';
import Veterinary from '../src/components/Veterinary';
import Dentistry from '../src/components/dentistry'; 
import Innovation from '../src/components/Innovation'; 
import Museum from '../src/components/Museum'; 
import Library from '../src/components/library'; 
import Gunsel from '../src/components/gunsel'; 

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
            </Routes>

        </Router>
    );
}

export default App;
