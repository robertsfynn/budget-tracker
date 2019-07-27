import React from 'react';
import {
  Container,
  BudgetList,
  Row,
  PageTemplate,
  Header,
  Title,
} from 'components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plus from 'assets/plus.svg';

const StyledPlus = styled.div`
  background: url(${plus}) no-repeat center;
  height: 14px;
  width: 14px;
`;

const BudgetPage = () => {
  return (
    <PageTemplate>
      <Container>
        <Header>
          <Row center noMargin justifyContent="space-between">
            <Title noMargin>Budget</Title>
            <Link to="budget/create">
              <StyledPlus />
            </Link>
          </Row>
        </Header>
        <BudgetList />
      </Container>
    </PageTemplate>
  );
};

export default BudgetPage;
