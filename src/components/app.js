// @flow
import React from 'react';
import Radium from 'radium';

import { backgroundColor, center } from './styles';
import MapPanel from './mapPanel';

const navHeight = 55;
const flexContainerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
const navStyle = {
  ...flexContainerStyle,
  height: navHeight,
  width: '100%',
  backgroundColor,
  position: 'fixed',
  zIndex: 10,
};
const linkHover = { ':hover': { color: 'white' } };
const linkStyle = { color: '#163e3a', flex: '0 1 150px', textAlign: 'center', fontSize: 14, textDecoration: 'none', ...linkHover };
const rsvpStyle = { ...linkStyle, color: 'white', backgroundColor: '#163e3a', padding: '10px 0px' };
const bannerStyle = { backgroundColor, position: 'fixed', top: navHeight, zIndex: 0, width: '100%' };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerHeight: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ bannerHeight: this.banner.scrollHeight });
    }, 100);
  }

  render() {
    return (
      <div style={{ position: 'relative', backgroundColor }}>
        <nav style={navStyle}>
          <a style={linkStyle} href="a" key="Home">Home</a>
          <a style={linkStyle} href="a" key="Our Story">Our Story</a>
          <a style={linkStyle} href="a" key="Wedding">Wedding</a>
          <a style={linkStyle} href="a" key="Getting">Getting There</a>
          <a style={linkStyle} href="a" key="Gifts">Gifts</a>
          <a style={rsvpStyle} href="a" key="RSVP">RSVP</a>
        </nav>
        <div ref={n => { this.banner = n; }} style={bannerStyle}>
          <img style={{ width: '50%', ...center, paddingBottom: 20 }} src="/images/banner.png" alt="banner" />
        </div>
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ height: this.state.bannerHeight + (navHeight), visibility: 'hidden' }} />
          <MapPanel />
        </div>
      </div>
    );
  }
}

export default Radium(App);
