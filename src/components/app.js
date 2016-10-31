import React from 'react';
import Radium from 'radium';

import { backgroundColor } from '../styles';
import Nav from './Nav';
import BigImage from './BigImage';
import MapPanel from './MapPanel';

const App = () => (
  <div style={{ backgroundColor }}>
    <Nav />
    <BigImage />
    <MapPanel />
  </div>
);

export default Radium(App);
