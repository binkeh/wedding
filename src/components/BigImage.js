import React from 'react';
import { center, navHeight } from '../styles';

const style = { width: '50%', ...center, paddingTop: navHeight, paddingBottom: 20 };

const BigImage = () => (
  <img style={style} src="/images/banner.png" alt="banner" />
);

export default BigImage;
