import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Column, Button, NavbarItem } from 'components';
import styled from 'styled-components';
import DailyLogo from 'assets/navbar/calender.svg';

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
  background-color: #f3f3f3;
`;

const Navbar = ({ history }) => {
  // const logout = async () => {
  //   await Firebase.logout();
  //   history.push('/login');
  // };

  return (
    <StyledNavbar>
      <Container>
        <Row center>
          <Column>
            <NavbarItem text="Daily" active logo={DailyLogo} />
          </Column>
          <Column />
          <StyledDivAddButton>
            <Link to="/create">
              <Button type="add" />
            </Link>
          </StyledDivAddButton>
          <Column offset="20%" />
          <Column />
        </Row>
      </Container>
    </StyledNavbar>
  );
};

export default withRouter(Navbar);
