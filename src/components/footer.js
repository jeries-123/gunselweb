import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/Footer.css';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [20, 20],
});

// Marker locations and popups
const locations = [
  { position: [35.22679, 33.31988], popup: '<a href="https://tour.panoee.com/6543d2d34eb4d66bb130d466/6543d5b7ab514b9e5ccd02de">Faculty of Engineering</a>' },
  { position: [35.22857, 33.31977], popup: '<a href="https://tour.panoee.com/654e6487d8c0de839a6735e2/654e64f4d747fd43b41c2fd9">NEU Hospital</a>' },
  { position: [35.22792, 33.31960], popup: '<a href="https://tour.panoee.com/iframe/6545363b59dd512ab75b9e43">Faculty of Medicine</a>' },
  { position: [35.22685, 33.31902], popup: '<a href="https://tour.panoee.com/iframe/6548f402de5d97b14cd94ff1">Faculty of Veterinary Medicine</a>' },
  { position: [35.221897, 33.323323], popup: '<a href="https://tour.panoee.com/654e5f93d747fd07c31c2f7f">NEU Mosque</a>' },
  { position: [35.225137, 33.327278], popup: '<a href="https://tour.panoee.com/655e2dbdd8c0de9b92679d75/655e2e3cd8c0de2a0d679d92">Library</a>' },
  { position: [35.229752, 33.324771], popup: '<a href="https://bus.neu.edu.tr/">Bus station 1</a>' },
  { position: [35.225750, 33.325832], popup: '<a href="https://bus.neu.edu.tr/">Bus station 2</a>' },
  { position: [35.224082, 33.325411], popup: '<a href="https://tour.panoee.com/656defa5d8c0de211a6811d0/656defd2d747fd6eff1d1363">Faculty of Communications</a>' },
  { position: [35.228595, 33.321313], popup: '<a href="https://tour.panoee.com/656ded4cd747fd62681d1336/656dee23d747fd3e931d1345">Faculty of Dentistry</a>' },
  { position: [35.2287516, 33.3216167], popup: '<a href="https://tour.panoee.com/655e70c7d8c0de8dd6679ed2/655e7171d8c0def22d679ee4">Faculty of Pharmacy</a>' },
  { position: [35.230060, 33.323102], popup: '<a href="https://tour.panoee.com/654b3de0d8c0deb015671e08">Preparatory School</a>' },
  { position: [35.225351, 33.323369], popup: '<a href="https://tour.panoee.com/6580afcad747fd390c1d7aa0">NEU Car Museum</a>' },
  { position: [35.226819, 33.321177], popup: '<a href="https://tour.panoee.com/65dfb3b494b642d9e115cfe2/65dfb4367a73f274fe4da8ab">NEU Lake</a>' },
  { position: [35.229668, 33.320829], popup: '<a href="https://tour.panoee.com/65c6474b01a42077b5de295b/65c64a1001a42021b3de2973">Faculty of Health and Science</a>' },
  { position: [35.225956, 33.325945], popup: '<a href="https://tour.panoee.com/664f601bfe60db9991c93887/664f6031fe60db8b4fc93892">Faculty of Architecture</a>' },
  { position: [35.226542, 33.326325], popup: '<a href="https://tour.panoee.com/664f4cc442adc5803e3ac479/664f4d84fe60db7cc5c937e5">Faculty of Law</a>' },
  { position: [35.224689, 33.326650], popup: '<a href="https://tour.panoee.com/662912affb11a6d28393ad82/66291475fb11a6632093adad">Faculty of Arts and Sciences</a>' },
  { position: [35.225476, 33.326618], popup: '<a href="https://tour.panoee.com/662912affb11a6d28393ad82/66291475fb11a6632093adad">Faculty of Economics and Administrative Sciences</a>' },
];

function ResizeMap({ isExpanded }) {
  const map = useMap();
  useEffect(() => {
    if (isExpanded) {
      map.invalidateSize();
    }
  }, [isExpanded, map]);
  return null;
}

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleMapSize = () => {
    setIsExpanded(!isExpanded);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/header.jpg" alt="Logo" className="footer-logo" />
        <p className="location-text">
          Gunsel City For Arts, Science & Innovation
          <br /> - Nicosia, North Cyprus
        </p>
        <div
          className={`map-container ${isExpanded ? 'expanded' : ''}`}
          onClick={!isExpanded ? toggleMapSize : undefined} // Toggle on click only when not expanded
        >
          {/* Tooltip arrow */}
          {showTooltip && (
            <div className="tooltip">
              <span className="tooltip-text">Click here</span>
              <button className="tooltip-close" onClick={closeTooltip}>×</button>
            </div>
          )}
          <MapContainer
            center={[35.22857, 33.31977]}
            zoom={15}
            className="leaflet-map"
            style={{ cursor: 'pointer' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((loc, index) => (
              <Marker key={index} position={loc.position} icon={customIcon}>
                <Popup>
                  <div dangerouslySetInnerHTML={{ __html: loc.popup }} />
                </Popup>
              </Marker>
            ))}
            <ResizeMap isExpanded={isExpanded} />
          </MapContainer>
          {isExpanded && (
            <button className="close-btn" onClick={toggleMapSize}>
              Close
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
