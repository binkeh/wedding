import React from 'react';
import Radium from 'radium';

import Nav from './Nav';
import BigImage from './BigImage';
import GettingThere from './GettingThere';
import Ceremony from './Ceremony';

const App = () => (
  <div>
    <Nav />
    <BigImage />
    <Ceremony />
    <GettingThere />
  </div>
);

export default Radium(App);
