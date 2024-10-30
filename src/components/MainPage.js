import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from './Header';
import '../styles/mainpage.css';

function Model() {
  const { scene } = useGLTF('/campus.glb');
  return <primitive object={scene} scale={0.5} />;
}

function MainPage() {
  const [isSwiped, setIsSwiped] = useState(false);
  const navigate = useNavigate(); // Use navigate for navigation

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
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>
      
      <div className={`swipe-section ${isSwiped ? 'swiped' : ''}`} onClick={handleSwipe}>
        <div className="swipe-overlay">Swipe</div>
        <p className="swipe-text">View the Gunsel City for Technology and Science</p>
      </div>
    </div>
  );
}

export default MainPage;
