import React, { useState, useEffect, useContext } from 'react';
import {
  FirebaseContext,
  SmallHeader,
  Title,
  Arrow,
  CustomPlaceholder,
  Row,
  Container,
  Box,
  Column,
  TransactionChart,
} from 'components';

import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import ReactPlaceholder from 'react-placeholder';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as IncomeIcon } from 'assets/oval-blue.svg';
import { ReactComponent as ExpenseIcon } from 'assets/oval-red.svg';

const StyledHeader = styled.h4`
  font-family: GTWalsheimPro;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
  margin: 0;
  margin-top: ${({ marginTop }) => marginTop}rem;
`;

const StyledAmount = styled.p`
  font-family: GTWalsheimPro;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const TransactionStatistic = () => {
  const Firebase = useContext(FirebaseContext);
  const [data, setData] = useState();
  const [incomeAmount, setIncomeAmount] = useState();
  const [exepenseAmount, setExpenseAmount] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const formatData = (unformattedData) => {
    // creates an Object where all Entries of the same Day get summed up
    const helperObject = {};
    unformattedData.forEach((dataItem) => {
      helperObject[dataItem.dateDay] =
        (helperObject[dataItem.dateDay] || 0) + dataItem.amountTransformed;
    });

    // turns that Object into an Array
    const helperArray = Object.keys(helperObject).map((day) => {
      return {
        dateDay: day,
        amount: Math.round(helperObject[day] * 1e2) / 1e2,
      };
    });

    // sums the amount from the day before into the next one so the values are a curve
    const result = helperArray.map((elem, index) =>
      helperArray.slice(0, index + 1).reduce((previousValue, currentValue) => {
        return {
          dateDay: currentValue.dateDay,
          amount:
            Math.round((previousValue.amount + currentValue.amount) * 1e2) /
            1e2,
        };
      }),
    );

    return result;
  };

  useEffect(() => {
    const getTransactions = async () => {
      const newData = [];
      const transactions = await Firebase.getTransactionsByMonth(currentDate);
      let newExpenseAmount = 0;
      let newIncomeAmount = 0;

      transactions.forEach((doc) => {
        const { date, amount, transaction } = doc.data();
        const dateDay = date.toDate().getDay();
        let amountWithOperator;
        if (transaction === 'expense') {
          amountWithOperator = -amount;
          newExpenseAmount += parseFloat(amount);
        } else {
          amountWithOperator = -amount;
          newIncomeAmount += parseFloat(amount);
        }
        const amountTransformed = parseFloat(amountWithOperator);
        newData.push({ dateDay, amountTransformed, transaction });
      });

      const formettedData = formatData(newData);
      setExpenseAmount(newExpenseAmount);
      setIncomeAmount(newIncomeAmount);
      setData(formettedData);
      setIsLoading(false);
    };
    getTransactions();
  }, [currentDate, Firebase]);

  const toggleCalendar = (e) => {
    e && e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = (newDate) => {
    toggleCalendar();
    setIsLoading(true);
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
        customPlaceholder={<CustomPlaceholder height={450} />}
      >
        {data && data.length ? <TransactionChart data={data} /> : <></>}
      </ReactPlaceholder>
      <Row>
        <Column>
          <Box marginRight>
            <IncomeIcon />
            <StyledHeader marginTop={2}>Income</StyledHeader>
            <StyledAmount>{incomeAmount}</StyledAmount>
          </Box>
        </Column>
        <Column>
          <Box>
            <ExpenseIcon />
            <StyledHeader marginTop={2}>Expense</StyledHeader>
            <StyledAmount>{exepenseAmount}</StyledAmount>
          </Box>
        </Column>
      </Row>
    </Container>
  );
};

export default TransactionStatistic;
