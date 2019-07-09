import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-bottom: 2rem;
`;

const PageTemplate = ({ children }) => <StyledMain>{children}</StyledMain>;

export default PageTemplate;
