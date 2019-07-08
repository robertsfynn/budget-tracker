import React from 'react';
import {
  Header,
  Title,
  TransactionList,
  DailyTransactionForm,
  Container,
} from 'components';

const DailyTransaction = () => {
  return (
    <Container>
      <Header>
        <Title>Daily Transactions </Title>
      </Header>
      {/* <TransactionList /> */}
      <DailyTransactionForm/>
    </Container>
  );
};

export default DailyTransaction;
