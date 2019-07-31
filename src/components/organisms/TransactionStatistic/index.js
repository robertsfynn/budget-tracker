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
  CustomTooltip,
} from 'components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import ReactPlaceholder from 'react-placeholder';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/Statistics.css';

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
`;

const StyledBalanceAmount = styled.p`
  font-family: GTWalsheimPro;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.83;
  letter-spacing: normal;
  color: #1c202e;
  margin-top: 1rem;
`;

const TransactionStatistic = () => {
  const Firebase = useContext(FirebaseContext);
  const [data, setData] = useState();
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
      const transactions = await Firebase.getTransactionsByDate(currentDate);

      transactions.forEach((doc) => {
        const { date, amount, transaction } = doc.data();
        const dateDay = date.toDate().getDay();
        const amountWithOperator = transaction === 'expense' ? -amount : amount;
        const amountTransformed = parseFloat(amountWithOperator);
        newData.push({ dateDay, amountTransformed, transaction });
      });

      const formettedData = formatData(newData);
      setData(formettedData);
      setIsLoading(false);
    };
    getTransactions();
  }, [currentDate]);

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
        {data && data.length ? (
          <Box>
            <StyledHeader>Net balance</StyledHeader>
            <StyledBalanceAmount>
              {data[data.length - 1].amount}€
            </StyledBalanceAmount>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} style={{ marginLeft: '-1.3rem' }}>
                <XAxis dataKey="dateDay" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#ff3378"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        ) : (
          <></>
        )}
      </ReactPlaceholder>
    </Container>
  );
};

export default TransactionStatistic;