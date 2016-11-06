import React from 'react';

const AnchorTarget = ({ id }) => <span id={id} className="anchor-target" />;

AnchorTarget.propTypes = {
  id: React.PropTypes.string.isRequired,
};

export default AnchorTarget;
