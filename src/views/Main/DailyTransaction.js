import React from 'react';
import { Header, Title } from '../../components';
import TransactionList from '../../components/TransactionList';

const DailyTransaction = () => {
  return (
    <div>
      <Header>
        <Title>Daily Transactions </Title>
      </Header>
      <TransactionList />
    </div>
  );
};

export default DailyTransaction;
