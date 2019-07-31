import React, { useContext } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
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
import StatsLogo from 'assets/navbar/stats.svg';

const StyledNavbar = styled.nav`
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  background: radial-gradient(
    circle at top center,
    transparent,
    transparent 35px,
    #ffffff 35px,
    #ffffff
  );
`;

const StyledDivAddButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20px;
  padding: 1rem;
  border-radius: 100%;
`;

const Navbar = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  const logout = async () => {
    await Firebase.logout();
    history.push('/login');
  };

  console.log("Navbar")

  return (
    <StyledNavbar>
      <Container>
        <Row center>
          <Column>
            <NavLink to="/" exact>
              <NavbarItem text="Daily" logo={DailyLogo} />
            </NavLink>
          </Column>
          <Column>
            <NavLink to="/stats">
              <NavbarItem text="Stats" logo={StatsLogo} />
            </NavLink>
          </Column>
          <Column offset="20%">
            <NavLink to="/budget">
              <NavbarItem text="Budget" logo={BudgetLogo} />
            </NavLink>
          </Column>
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
