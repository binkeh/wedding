import React from 'react';

import { backgroundColor, navHeight } from '../styles';

const flexContainer = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
const navStyle = {
  ...flexContainer,
  height: navHeight,
  width: '100%',
  position: 'fixed',
  backgroundColor,
};
const linkHover = { ':hover': { color: 'white' } };
const linkStyle = { color: '#163e3a', flex: '0 1 150px', textAlign: 'center', fontSize: 14, textDecoration: 'none', ...linkHover };
const rsvpStyle = { ...linkStyle, color: 'white', backgroundColor: '#163e3a', padding: '10px 0px' };

const Nav = () => (
  <nav style={navStyle}>
    <a style={linkStyle} href="#home" key="Home">Home</a>
    <a style={linkStyle} href="#ceremony" key="Ceremony">Ceremony</a>
    <a style={linkStyle} href="#getting-there" key="Getting There">Getting There</a>
    <a style={linkStyle} href="#gifts" key="Gifts">Gifts</a>
    <a style={rsvpStyle} href="#rsvp" key="RSVP">RSVP</a>
  </nav>
);

export default Nav;
