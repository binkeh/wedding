// @flow
import React from 'react';

import MapPanel from './mapPanel';

const navHeight = 45;
const flexContainerStyle = { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' };
const navStyle = {
  ...flexContainerStyle,
  height: navHeight,
  width: '100%',
  backgroundColor: '#4e4a4a',
  position: 'fixed',
  zIndex: 10,
};
const flexItemStyle = { color: 'white', marginRight: 20 };
const headingStyles = {
  position: 'absolute',
  color: 'white',
  fontFamily: "'Dancing Script', cursive",
  left: 70,
  top: 20,
  fontSize: '4em',
  fontStyle: 'italic',
};

export default class App extends React.Component {
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
      <div style={{ position: 'relative' }}>
        <nav style={navStyle}>
          <a style={flexItemStyle}>Welcome</a>
        </nav>
        <div ref={n => { this.banner = n; }} style={{ position: 'fixed', top: 45, zIndex: 0 }}>
          <h1 style={headingStyles}>
            {"We're getting married!"}
          </h1>
          <img src="/images/orchids.jpg" alt="banner" width="100%" />
        </div>
        <div style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ height: this.state.bannerHeight + navHeight, visibility: 'hidden' }} />
          <MapPanel />
        </div>
      </div>
    );
  }
}

