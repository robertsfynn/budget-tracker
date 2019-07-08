import React from 'react';
import { Navbar } from 'components';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-bottom: 13rem;
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
