import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavbarItem = styled.div`
  padding-top: 1rem;
  position: relative;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    height: 1px;
    width: 40%;
    border-top: ${({ active }) => (active ? '1px solid #ff3378' : '')};
  }
`;

const StyledNavbarLogo = styled.div`
  background-image: url(${(props) => props.logo});
  width: 24px;
  height: 24px;
  margin: 0 auto;
`;

const StyledNavbarText = styled.p`
  font-family: GTWalsheimPro;
  font-size: 9px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.78;
  letter-spacing: normal;
  text-align: center;
  color: #1c202e;
`;

const NavbarItem = ({ text, logo, active }) => {
  return (
    <StyledNavbarItem active={active}>
      <StyledNavbarLogo active logo={logo} />
      <StyledNavbarText>{text}</StyledNavbarText>
    </StyledNavbarItem>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

NavbarItem.defaultProps = {
  active: false,
};

export default NavbarItem;
