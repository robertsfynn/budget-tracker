import React from 'react';
import {
  PageTemplate,
  Header,
  Title,
  TransactionList,
  Container,
} from 'components';

const DailyTransaction = () => {
  return (
    <PageTemplate>
      <Container>
        <Header>
          <Title>Daily Transactions </Title>
        </Header>
        <TransactionList />
      </Container>
    </PageTemplate>
  );
};

export default DailyTransaction;
