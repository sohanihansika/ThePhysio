// components/MKBox.js
import React from 'react';
import PropTypes from 'prop-types';

const MKBox = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};

MKBox.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

MKBox.defaultProps = {
  style: {},
};

export default MKBox;
