// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/Museum.css';
import Footer from './footer'; 

export default function veterinary() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Car Museum</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/6580afcad747fd390c1d7aa0"
            title="Dentistry Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      
      <Footer /> 
    </>
  );
}
