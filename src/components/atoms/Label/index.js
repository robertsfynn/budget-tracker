import React from 'react';
import styled from 'styled-components';

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

export default Label;
