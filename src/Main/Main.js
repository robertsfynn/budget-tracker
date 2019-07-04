import React, { useState, useEffect, useContext } from 'react';
import MonthlyBudget from './MonthlyBudget';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/FirebaseContext';
import MoneyTracker from './MoneyTracker';

const Main = ({ history }) => {
  const [monthlyBudget, setMonthlyBudget] = useState({});
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    const getMonthlyBudget = async () => {
      const monthlyBudget = await Firebase.getMonthlyBudget();
      setMonthlyBudget(monthlyBudget);
    };

    if (!Firebase.getCurrentUser()) history.push('/login');
    else getMonthlyBudget();
  }, []);
  console.log(monthlyBudget);
  return (
    <section className="section section-full-height">
      <div className="container">
        {monthlyBudget ? (
          <MoneyTracker monthlyBudget={monthlyBudget} />
        ) : (
          <MonthlyBudget setMonthlyBudget={setMonthlyBudget} />
        )}
      </div>
    </section>
  );
};

export default withRouter(Main);
