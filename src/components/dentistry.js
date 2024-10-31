// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/dentistry.css';

export default function veterinary() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Dentistry building</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/656ded4cd747fd62681d1336/656dee23d747fd3e931d1345"
            title="Dentistry Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
