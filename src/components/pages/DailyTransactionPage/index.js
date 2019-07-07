import React from 'react';
import { Header, Title, TransactionList, Container } from 'components';

const DailyTransaction = () => {
  return (
    <Container>
      <Header>
        <Title>Daily Transactions </Title>
      </Header>
      <TransactionList />
    </Container>
  );
};

export default DailyTransaction;
