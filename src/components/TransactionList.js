import React, { useEffect, useState, useContext } from 'react';
import { Container } from './grid';
import FirebaseContext from './Firebase/FirebaseContext';
import TransactionListItem from './TransactionListItem';
import styled from 'styled-components';
import Total from './Total';

const StyledTransactionList = styled.ul`
  padding: 0;
  margin: 0;
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState();
  const Firebase = useContext(FirebaseContext);

  //TODO: if no transactions, show that u can add some!

  useEffect(() => {
    Firebase.getTransactions().then((querySnapshot) => {
      let transactions = [];
      let total = 0;
      querySnapshot.forEach((doc) => {
        const transaction = doc.data();
        const id = doc.id;

        total += transaction.amount;
        transactions.push({ id, ...transaction });
      });
      setTotal(total);
      setTransactions(transactions);
    });
  }, []);

  return (
    <Container>
      <StyledTransactionList>
        {transactions.map(({ id, amount, category, date, payee }) => (
          <TransactionListItem
            key={id}
            category={category}
            payee={payee}
            date={date.toDate().toDateString()}
            amount={amount}
          />
        ))}
      </StyledTransactionList>
      <Total total={total} />
    </Container>
  );
};

export default TransactionList;
