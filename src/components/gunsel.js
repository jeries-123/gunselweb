// Import necessary components
import React from 'react';
import Header from './Header';
import '../styles/gunsel.css';

export default function gunsel() {
  return (
    <>
      <Header />
      <main className="hospital-page">
        <h2>Gunsel Cars Company</h2>
        <div className="iframe-container">
          <iframe
            src="https://www.gunsel.com.tr/"
            title="Library Information"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
