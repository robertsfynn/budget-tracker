import React from 'react';
import { Navbar } from 'components';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-bottom: 8rem;
`;

const PageTemplate = ({ children }) => (
  <>
    <Navbar />
    <StyledMain>{children}</StyledMain>
  </>
);

export default PageTemplate;
