import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled.div`
  border-radius: 20px;
  box-shadow: 0 18px 36px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  padding: 1.7rem;
  margin: 0 0.5rem;
  position: relative;
  z-index: 2;
  cursor: pointer;

  > * {
    pointer-events: none;
  }
`;

const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

Box.propTypes = {
  children: PropTypes.node,
};

Box.defaultProps = {
  children: null,
};

export default Box;
