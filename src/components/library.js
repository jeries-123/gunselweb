// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/library.css';
import Footer from './footer'; 

export default function library() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Library</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/655e2dbdd8c0de9b92679d75/655e2e3cd8c0de2a0d679d92"
            title="Library Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      
      <Footer /> 
    </>
  );
}
