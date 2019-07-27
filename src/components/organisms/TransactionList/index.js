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
  CustomPlaceholder,
} from 'components';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const StyledTransactionList = styled.ul`
  padding: 0;
  margin: 0;
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Firebase = useContext(FirebaseContext);

  const resetState = () => {
    setTotal();
    setIsLoading(true);
  };

  // Needs Refactoring
  useEffect(() => {
    resetState();
    if (Firebase.getCurrentUser()) {
      Firebase.getTransactions(currentDate).then((querySnapshot) => {
        const newTransactions = [];
        let newTotal = 0;
        querySnapshot.forEach((doc) => {
          const transaction = doc.data();
          const { id } = doc;

          if (transaction.transaction === 'expense') {
            newTotal -= parseFloat(transaction.amount);
          } else {
            newTotal += parseFloat(transaction.amount);
          }

          newTransactions.push({ id, ...transaction });
        });
        setTransactions(newTransactions);
        setTotal(newTotal.toFixed(2));
        setIsLoading(false);
      });
    }
  }, [Firebase, currentDate]);

  const toggleCalendar = (e) => {
    e && e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = (newDate) => {
    toggleCalendar();
    setCurrentDate(newDate);
  };

  // Not quite sure if thats the best way, but its the fix that you can click outside of datepicker
  document.addEventListener('click', (event) => {
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
              {currentDate.toDateString()}
              <Arrow type="bottom" />
            </Row>
          </Title>
        </SmallHeader>
      </ReactPlaceholder>
      {isOpen ? (
        <DatePicker
          selected={currentDate}
          onChange={handleChange}
          withPortal
          inline
        />
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
                    id={id}
                    transaction={transaction}
                    category={category}
                    payee={payee}
                    date={date.toDate()}
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
