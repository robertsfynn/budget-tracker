import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-family: GTWalsheimPro;
  font-size: ${({ small }) => (small ? '18px' : '24px')}
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
  text-align: ${({ center }) => (center ? 'center' : '')};
  margin: ${({ margin }) => (margin ? '1rem 0 1rem 0' : '0')};
`;

const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
