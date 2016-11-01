import React from 'react';

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1973.7589458954621!2d103.81789335110999!3d1.310' +
  '454991526201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1475308372917';

const MapPanel = () => (
  <section>
    <h1>Getting there</h1>
    <iframe src={mapSrc} width="450" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen />
  </section>
);

export default MapPanel;
