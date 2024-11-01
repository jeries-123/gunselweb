import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';  // Adjusted for naming consistency
import '@google/model-viewer';
import '../styles/mainpage.css';

function ModelViewerComponent() {
  return (
    <model-viewer
      src="/campus.glb"
      alt="A 3D model of a campus"
      auto-rotate
      camera-controls
      camera-orbit="0deg 75deg 10.5m"
      style={{ width: '100%', height: '100%' }}
    ></model-viewer>
  );
}

function MainPage() {
  const [isSwiped, setIsSwiped] = useState(false);
  const navigate = useNavigate();

  const handleSwipe = () => {
    setIsSwiped(true);
    setTimeout(() => {
      navigate('/info'); // Navigate to /info route
    }, 300);
  };

  return (
    <div className="main-page">
      <Header /> {/* Include the Header component */}
      
      <div className="model-frame">
        <ModelViewerComponent /> {/* Replace Canvas and Model with ModelViewerComponent */}
      </div>
      
      <div className={`swipe-section ${isSwiped ? 'swiped' : ''}`} onClick={handleSwipe}>
        <div className="swipe-overlay">Swipe</div>
        <p className="swipe-text">View the Gunsel City for Technology and Science</p>
      </div>
      
      <Footer /> 
    </div>
  );
}

export default MainPage;
