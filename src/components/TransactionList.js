import React from 'react';
import { Container } from './grid';

import TransactionListItem from './TransactionListItem';

const TransactionList = () => {
  return (
    <Container>
      <TransactionListItem
        category="Essen"
        payee="Dieter Müller"
        date="Fri 10AM"
        amount="320"
      />
    </Container>
  );
};

export default TransactionList;
