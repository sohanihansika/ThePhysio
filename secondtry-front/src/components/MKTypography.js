// components/MKTypography.js
import React from 'react';
import PropTypes from 'prop-types';

const MKTypography = ({ variant, children, style }) => {
  const Tag = variant;
  return <Tag style={style}>{children}</Tag>;
};

MKTypography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

MKTypography.defaultProps = {
  variant: 'p',
  style: {},
};

export default MKTypography;
