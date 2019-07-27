import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Arrow,
  SmallHeader,
  Title,
  Row,
  BudgetBox,
  FirebaseContext,
} from 'components';
import DatePicker from 'react-datepicker';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const BudgetList = () => {
  const Firebase = useContext(FirebaseContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Put in own Component with other Placeholders
  const CustomPlaceholder = (
    <RectShape
      style={{
        marginBottom: 30,
        width: '100%',
        height: '30px',
        background: 'rgb(205, 205, 205)',
        borderRadius: '25px',
      }}
    />
  );

  useEffect(() => {
    Firebase.getBudgets().then((querySnapshot) => {
      const newBudgets = [];
      querySnapshot.forEach((doc) => {
        const budget = doc.data();
        const { id } = doc;

        newBudgets.push({ id, ...budget });
      });
      setIsLoading(false);
    });
  }, []);

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
      <BudgetBox />
    </Container>
  );
};

export default BudgetList;
