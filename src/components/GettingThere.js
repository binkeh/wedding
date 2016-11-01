import React from 'react';
import AnchorTarget from './AnchorTarget';

const url = 'https://www.google.com/maps/d/u/1/edit?' +
  'mid=11lwl2w_rt4KDeRHwi8QBW8inYfk&' +
  'll=1.326246433625716%2C103.83079249999992&' +
  'z=12';

const MapPanel = () => (
  <section>
    <AnchorTarget id="getting-there" />
    <h1>Getting there</h1>
    <div style={{ height: 500, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div id="map" />
    </div>
    <p>
      Check out our <a href={url}>customised map</a> for a more detailed map of our event locations,
      as well as recommendations for food and sightseeing in Singapore.
    </p>
  </section>
);

export default MapPanel;
