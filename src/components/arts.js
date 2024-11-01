// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/arts.css';
import Footer from './footer'; 

export default function library() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Arts & science</h2>
        <div className="iframe-container">
          <iframe
            src="https://tour.panoee.com/662912affb11a6d28393ad82/66291475fb11a6632093adad"
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
