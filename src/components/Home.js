import React from 'react';
import Radium from 'radium';

import AnchorTarget from './AnchorTarget';
import Nav from './Nav';
import BigImage from './BigImage';
import GettingThere from './GettingThere';
import Ceremony from './Ceremony';
import Gifts from './Gifts';
import RSVP from './RSVP';

const Home = () => (
  <div>
    <AnchorTarget id="home" />
    <Nav />
    <BigImage />
    <Ceremony />
    <GettingThere />
    <Gifts />
    <RSVP />
  </div>
);

export default Radium(Home);
