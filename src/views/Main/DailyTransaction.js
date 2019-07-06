import React from 'react';
import { Header, Title } from '../../components';
import { Container } from '../../components/grid';
import TransactionList from '../../components/TransactionList';

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
