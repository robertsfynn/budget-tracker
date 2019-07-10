import React, { useEffect, useState, useContext } from 'react';
import {
  FirebaseContext,
  Container,
  TransactionListItem,
  Total,
  NoTransactions,
  Title,
  SmallHeader,
  Arrow,
  Row,
} from 'components';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledTransactionList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledDatePickerButton = styled.div`
  background: #ffffff;
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (Firebase.getCurrentUser())
      Firebase.getTransactions().then((querySnapshot) => {
        let transactions = [];
        let total = 0;
        querySnapshot.forEach((doc) => {
          const transaction = doc.data();
          const id = doc.id;

          if (transaction.transaction === 'expense') {
            total -= parseFloat(transaction.amount);
          } else {
            total += parseFloat(transaction.amount);
          }

          transactions.push({ id, ...transaction });
        });
        setTotal(total);
        setTransactions(transactions);
        setIsLoading(false);
      });
  }, [Firebase]);

  const handleChange = (date) => {
    toggleCalendar();
    setDate(date);
  };

  const toggleCalendar = (e) => {
    e && e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <SmallHeader clickable onClick={toggleCalendar}>
        <Title small>
          <Row center>
            {date.toDateString()}
            <Arrow type="bottom" />
          </Row>
        </Title>
      </SmallHeader>
      {isOpen ? (
        <DatePicker selected={date} onChange={handleChange} withPortal inline />
      ) : null}
      <ReactPlaceholder
        showLoadingAnimation
        type="media"
        rows={2}
        ready={!isLoading}
      >
        <StyledTransactionList>
          {transactions.map(
            ({ id, transaction, amount, category, date, payee }) => (
              <TransactionListItem
                key={id}
                transaction={transaction}
                category={category}
                payee={payee}
                date={date.toDate().toDateString()}
                amount={amount}
              />
            ),
          )}
        </StyledTransactionList>
        {total ? <Total total={total} /> : <NoTransactions />}
      </ReactPlaceholder>
    </Container>
  );
};

export default TransactionList;
