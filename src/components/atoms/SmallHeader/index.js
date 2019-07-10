import React from 'react';
import styled from 'styled-components';

const StyledSmallHeader = styled.div`
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`;

const SmallHeader = ({ children, ...props }) => {
  return <StyledSmallHeader {...props}>{children}</StyledSmallHeader>;
};

export default SmallHeader;
