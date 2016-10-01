import React from 'react';

import { center } from './styles';

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1973.7589458954621!2d103.81789335110999!3d1.310' +
  '454991526201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1475308372917';

const MapPanel = () => (
  <div style={{ backgroundColor: 'white', zIndex: 5 }} >
    <h1 style={{ ...center, textAlign: 'center', paddingTop: 20 }}>
      {"We'd love to see you there"}
    </h1>
    <div style={{ display: 'flex', justifyContent: 'space-around', ...center, width: '85%' }}>
      <span>
        <iframe src={mapSrc} width="400" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen />
      </span>
      <span>
        <img height="300" src="/images/plantHouse.jpg" alt="plantHouse" />
      </span>
    </div>
    <div style={{ height: 1000 }} />
  </div>
);

export default MapPanel;
