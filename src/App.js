import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../src/components/MainPage';
import Info from '../src/components/info';
import HospitalPage from '../src/components/HospitalPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/info" element={<Info />} />
                <Route path="/hospital" element={<HospitalPage />} />
            </Routes>
        </Router>
    );
}

export default App;
