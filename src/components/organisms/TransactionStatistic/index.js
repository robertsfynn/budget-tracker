import React, { useState, useEffect, useContext } from 'react';
import {
  FirebaseContext,
  SmallHeader,
  Title,
  Arrow,
  CustomPlaceholder,
  Row,
  Container,
} from 'components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DatePicker from 'react-datepicker';
import ReactPlaceholder from 'react-placeholder';
import 'react-datepicker/dist/react-datepicker.css';

const TransactionStatistic = () => {
  const Firebase = useContext(FirebaseContext);
  const [data, setData] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const formatData = (unformattedData) => {
    const helperObject = {};
    unformattedData.forEach((dataItem) => {
      helperObject[dataItem.dateDay] =
        (helperObject[dataItem.dateDay] || 0) + dataItem.amountTransformed;
    });
    const result = Object.keys(helperObject).map((day) => {
      return {
        dateDay: day,
        amount: Math.round(helperObject[day] * 1e2) / 1e2,
      };
    });
    console.log(result);
    const test = result.map((elem, index) =>
      result.slice(0, index + 1).reduce((a, b) => a + b.amount, 0),
    );
    console.log(test);
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
        console.log(amountTransformed);
        newData.push({ dateDay, amountTransformed, transaction });
      });
      console.log(newData);

      const formettedData = formatData(newData);
      console.log(formettedData);
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
              {currentDate.toLocaleString('default', { month: 'long' })}
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
          showMonthYearPicker
          inline
        />
      ) : null}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateDay" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default TransactionStatistic;
