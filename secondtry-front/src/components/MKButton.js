// components/MKButton.js
import React from 'react';
import PropTypes from 'prop-types';

const MKButton = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

MKButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

MKButton.defaultProps = {
  onClick: () => {},
  style: {},
};

export default MKButton;
