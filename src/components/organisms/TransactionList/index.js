import React, { useEffect, useState, useContext } from 'react';
import {
  FirebaseContext,
  Container,
  TransactionListItem,
  Total,
  NoTransactions,
} from 'components';
import styled from 'styled-components';
import img from 'assets/no-transaction.png';

const StyledTransactionList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 172px;
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState();
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (Firebase.auth.id)
      Firebase.getTransactions().then((querySnapshot) => {
        let transactions = [];
        let total = 0;
        querySnapshot.forEach((doc) => {
          const transaction = doc.data();
          const id = doc.id;

          total += parseInt(transaction.amount);
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
      {total ? <Total total={total} /> : <NoTransactions />}
    </Container>
  );
};

export default TransactionList;
