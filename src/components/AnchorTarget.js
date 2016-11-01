import React from 'react';
import { navHeight } from '../styles';

const style = {
  display: 'block',
  visibility: 'hidden',
  position: 'relative',
  top: -navHeight - 10,
};

const AnchorTarget = ({ id }) => <span id={id} style={style} />;

AnchorTarget.propTypes = {
  id: React.PropTypes.string.isRequired,
};

export default AnchorTarget;
