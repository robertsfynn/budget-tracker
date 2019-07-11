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
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-datepicker/dist/react-datepicker.css';

const StyledTransactionList = styled.ul`
  padding: 0;
  margin: 0;
`;

const CustomPlaceholder = (
  <RectShape
    style={{
      marginBottom: 30,
      width: '100%',
      height: '70px',
      background: 'rgb(205, 205, 205)',
      borderRadius: '25px',
    }}
  />
);

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    resetState();
    if (Firebase.getCurrentUser())
      Firebase.getTransactions(date).then((querySnapshot) => {
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
        setTransactions(transactions);
        setTotal(total.toFixed(2));
        setIsLoading(false);
      });
  }, [Firebase, date]);

  const handleChange = (date) => {
    toggleCalendar();
    setDate(date);
  };

  const toggleCalendar = (e) => {
    e && e.preventDefault();
    setIsOpen(!isOpen);
  };

  const resetState = () => {
    setTotal();
    setIsLoading(true);
  };

  // Not quite sure if thats the best way, but its the fix that you can click outside of datepicker
  document.addEventListener('click', function(event) {
    if (!event.target.matches('.react-datepicker__portal')) return;
    setIsOpen(false);
  });

  return (
    <Container>
      <ReactPlaceholder
        showLoadingAnimation
        ready={!isLoading}
        customPlaceholder={CustomPlaceholder}
      >
        <SmallHeader clickable onClick={toggleCalendar}>
          <Title noMargin small>
            <Row noMargin center>
              {date.toDateString()}
              <Arrow type="bottom" />
            </Row>
          </Title>
        </SmallHeader>
      </ReactPlaceholder>
      {isOpen ? (
        <DatePicker selected={date} onChange={handleChange} withPortal inline />
      ) : null}
      <ReactPlaceholder
        showLoadingAnimation
        type="media"
        rows={2}
        ready={!isLoading}
      >
        {transactions.length ? (
          <>
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
            <Total total={total} />
          </>
        ) : (
          <NoTransactions />
        )}
      </ReactPlaceholder>
    </Container>
  );
};

export default TransactionList;
