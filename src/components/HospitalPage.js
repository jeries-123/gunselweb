// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/HospitalPage.css';
import Footer from './footer'; 
export default function HospitalPage() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Hospital</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/654e6487d8c0de839a6735e2/654e64f4d747fd43b41c2fd9"
            title="Hospital Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      
      <Footer /> 
    </>
  );
}
