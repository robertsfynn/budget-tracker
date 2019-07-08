import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  FirebaseContext,
  Container,
  Row,
  Column,
  Button,
  NavbarItem,
} from '../..';
import styled from 'styled-components';
import DailyLogo from 'assets/navbar/calender.svg';

const StyledNavbar = styled.nav`
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const StyledDivAddButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 30px;
  padding: 1rem;
  border-radius: 100%;
  background-color: #fcfcfc;
`;

const Navbar = ({ history }) => {
  const [active, setActive] = useState(false);
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
            <NavbarItem text="Daily" active logo={DailyLogo} />
          </Column>
          <Column>
            <NavbarItem text="Daily" logo={DailyLogo} />
          </Column>
          <StyledDivAddButton>
            <Button type="add" />
          </StyledDivAddButton>
          <Column offset="20%">
            <NavbarItem text="Daily" logo={DailyLogo} />
          </Column>
          <Column>
            <NavbarItem text="Daily" logo={DailyLogo} />
          </Column>
        </Row>
      </Container>
    </StyledNavbar>
  );
};

export default withRouter(Navbar);
