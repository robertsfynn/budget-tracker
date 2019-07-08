import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  border-radius: 20px;
  box-shadow: 0 18px 36px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  padding: 1.7rem;
  margin: 0 0.5rem;
`;

const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
