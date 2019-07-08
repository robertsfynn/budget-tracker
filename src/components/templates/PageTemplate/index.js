import React from 'react';
import { Navbar } from 'components';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-bottom: 140px;
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default PageTemplate;
