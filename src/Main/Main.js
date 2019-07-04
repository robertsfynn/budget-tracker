import React, { useState, useEffect, useContext } from 'react';
import MonthlyBudget from './MonthlyBudget';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/FirebaseContext';

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

  return (
    <section className="section section-full-height">
      <div className="container">
        {monthlyBudget ? null : <MonthlyBudget />}
        <h2>{monthlyBudget.salary}</h2>
      </div>
    </section>
  );
};

export default withRouter(Main);
