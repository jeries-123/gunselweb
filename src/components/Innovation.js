// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/HospitalPage.css';

export default function innovation() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Innovation center</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/6543d2d34eb4d66bb130d466/6543d5b7ab514b9e5ccd02de"
            title="innovation Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
