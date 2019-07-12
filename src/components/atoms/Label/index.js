import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  font-family: GTWalsheimPro;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
`;

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
