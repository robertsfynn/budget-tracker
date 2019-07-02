import React from 'react';
import MonthlyBudget from './MonthlyBudget';

const Main = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <MonthlyBudget />
        </div>
      </div>
    </section>
  );
};

export default Main;
