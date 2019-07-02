import React, { useState } from 'react';

const MonthlyBudget = ({ firebase }) => {
  const [salary, setSalary] = useState();
  const [fixedCost, setFixedCost] = useState();
  const [savings, setSavings] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="columns is-centered">
      <div className="column box is-half">
        <form onSubmit={handleSubmit}>
          <h1 className="title has-text-black has-text-centered">
            Money per month
          </h1>
          <div className="field">
            <label className="label">Salary</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Fixed Cost</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={fixedCost}
                onChange={(e) => setFixedCost(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Savings</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MonthlyBudget;
