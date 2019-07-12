import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar } from 'components';

const StyledMain = styled.main`
  padding-bottom: 8rem;
`;

const PageTemplate = ({ children }) => (
  <>
    <Navbar />
    <StyledMain>{children}</StyledMain>
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.node,
};

PageTemplate.defaultProps = {
  children: null,
};

export default PageTemplate;
