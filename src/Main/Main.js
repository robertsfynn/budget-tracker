import React from 'react';
import MonthlyBudget from './MonthlyBudget';

const Main = ({ firebase }) => {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          {/* <div className="has-text-centered">
            <Loader />
          </div> */}
          <MonthlyBudget />
        </div>
      </div>
    </section>
  );
};

export default Main;
