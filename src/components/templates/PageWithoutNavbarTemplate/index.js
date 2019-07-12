import React from 'react';
import PropTypes from 'prop-types';

const PageTemplate = ({ children }) => <main>{children}</main>;

PageTemplate.propTypes = {
  children: PropTypes.node,
};

PageTemplate.defaultProps = {
  children: null,
};

export default PageTemplate;
