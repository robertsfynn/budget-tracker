import React, { useState, useEffect, useContext } from 'react';
import MonthlyBudget from './MonthlyBudget';
import FirebaseContext from '../Firebase/FirebaseContext';

const Main = () => {
  const [monthlyBudget, setmonthlyBudget] = useState(true);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.getMonthlyBudget().then(() => {
      setmonthlyBudget(monthlyBudget);
    });
  });

  return (
    <section className="section section-full-height">
      <div className="container">
        {monthlyBudget ? null : <MonthlyBudget />}
      </div>
    </section>
  );
};

export default Main;
