// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/Veterinary.css';

export default function veterinary() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Veterinary</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/iframe/6548f402de5d97b14cd94ff1"
            title="Veterinary Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
