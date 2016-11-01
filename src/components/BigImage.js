import React from 'react';
import { navHeight, backgroundColor } from '../styles';

const BigImage = () => (
  <section style={{ backgroundColor, paddingTop: navHeight }}>
    <img style={{ width: '50%' }} src="/banner.png" alt="banner" />
  </section>
);

export default BigImage;
