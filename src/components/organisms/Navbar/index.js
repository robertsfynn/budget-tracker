import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Column,
  Button,
  NavbarItem,
  FirebaseContext,
} from 'components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DailyLogo from 'assets/navbar/calender.svg';
import ProfileLogo from 'assets/navbar/profile.svg';
import BudgetLogo from 'assets/navbar/budget.svg';

const StyledNavbar = styled.nav`
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

const StyledDivAddButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 30px;
  padding: 1rem;
  border-radius: 100%;
  background-color: #f0f0f0;
`;

const Navbar = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  const logout = async () => {
    await Firebase.logout();
    history.push('/login');
  };

  return (
    <StyledNavbar>
      <Container>
        <Row center>
          <Column>
            <Link to="/">
              <NavbarItem text="Daily" logo={DailyLogo} />
            </Link>
          </Column>
          <Column>
            <Link to="/budget">
              <NavbarItem text="Budget" logo={BudgetLogo} />
            </Link>
          </Column>

          <Column offset="20%" />
          <Column onClick={logout}>
            <NavbarItem text="Logout" logo={ProfileLogo} />
          </Column>
          <StyledDivAddButton>
            <Link to="/create">
              <Button type="add" />
            </Link>
          </StyledDivAddButton>
        </Row>
      </Container>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navbar);
