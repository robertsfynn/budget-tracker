import React from 'react';
import { Container, BudgetList, PageTemplate, Header, Title } from 'components';

const BudgetPage = () => {
  return (
    <PageTemplate>
      <Container>
        <Header>
          <Title noMargin>Budget</Title>
        </Header>
        <BudgetList />
      </Container>
    </PageTemplate>
  );
};

export default BudgetPage;
