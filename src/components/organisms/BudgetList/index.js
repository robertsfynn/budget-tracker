/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Arrow,
  SmallHeader,
  Title,
  Row,
  BudgetBox,
  FirebaseContext,
  CustomPlaceholder,
} from 'components';
import DatePicker from 'react-datepicker';
import ReactPlaceholder from 'react-placeholder';
import 'react-datepicker/dist/react-datepicker.css';

const BudgetList = () => {
  const Firebase = useContext(FirebaseContext);
  const [budgets, setBudgets] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBudgets = async () => {
      const querySnapshot = await Firebase.getBudgets();
      const newBudgets = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const budget = doc.data();
          const { id } = doc;

          const amount = await Firebase.getTransactionsAmountByCategoryAndDate(
            budget.category,
            currentDate,
          );

          budget.amount = amount;
          return { id, ...budget };
        }),
      );

      setBudgets(newBudgets);
      setIsLoading(false);
    };

    getBudgets();
  }, [currentDate, Firebase]);

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
      <SmallHeader clickable onClick={toggleCalendar}>
        <Title noMargin small>
          <Row noMargin center>
            {currentDate.toLocaleString('default', { month: 'long' })}
            <Arrow type="bottom" />
          </Row>
        </Title>
      </SmallHeader>
      {isOpen ? (
        <DatePicker
          selected={currentDate}
          onChange={handleChange}
          withPortal
          showMonthYearPicker
          inline
        />
      ) : null}
      <ReactPlaceholder
        showLoadingAnimation
        ready={!isLoading}
        customPlaceholder={<CustomPlaceholder height={150} type="box" />}
      >
        {budgets ? (
          budgets.map(({ id, amount, category, budget }) => (
            <BudgetBox
              key={id}
              amount={amount}
              category={category}
              budget={budget}
            />
          ))
        ) : (
          <> </>
        )}
      </ReactPlaceholder>
    </Container>
  );
};

export default BudgetList;
