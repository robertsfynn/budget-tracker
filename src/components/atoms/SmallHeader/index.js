import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSmallHeader = styled.div`
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  margin: ${({ noMargin }) => (noMargin ? '0' : '')};
`;

const SmallHeader = ({ children, ...props }) => (
  <StyledSmallHeader {...props}>{children}</StyledSmallHeader>
);

SmallHeader.propTypes = {
  children: PropTypes.node,
};

SmallHeader.defaultProps = {
  children: null,
};

export default SmallHeader;
