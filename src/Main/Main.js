import React, { useState, useEffect, useContext } from 'react';
import MonthlyBudget from './MonthlyBudget';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/FirebaseContext';
import MoneyTracker from './MoneyTracker';

const Main = ({ history }) => {
  const [monthlyBudget, setMonthlyBudget] = useState(true);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    const getMonthlyBudget = async () => {
      const monthlyBudget = await Firebase.getMonthlyBudget();
      if (monthlyBudget) setMonthlyBudget(monthlyBudget);
      else setMonthlyBudget(false);
    };

    if (!Firebase.getCurrentUser()) history.push('/login');
    else getMonthlyBudget();
  }, []);

  //Really unhappy how monthlyBudget gets rendered if there are none yet,
  // will find a better solution than that dirty hack

  return (
    <section className="section section-full-height">
      <div className="container">
        {typeof monthlyBudget === 'object' ? (
          <MoneyTracker monthlyBudget={monthlyBudget} />
        ) : null}
        {!monthlyBudget ? (
          <MonthlyBudget setMonthlyBudget={setMonthlyBudget} />
        ) : null}
      </div>
    </section>
  );
};

export default withRouter(Main);
