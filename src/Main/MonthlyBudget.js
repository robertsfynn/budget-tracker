import React, { useState, useContext } from 'react';
import FirebaseContext from '../Firebase/FirebaseContext';

const MonthlyBudget = () => {
  const [values, setValues] = useState({
    salary: '',
    fixedCost: '',
    savings: '',
  });

  const Firebase = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    Firebase.setMonthlyBudget(values).then((element) => {
      console.log(element);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="columns is-centered">
      <div className="column box is-half">
        <form onSubmit={handleSubmit}>
          <h1 className="title has-text-black has-text-centered">
            Monthly Budget
          </h1>
          <div className="field">
            <label className="label">Salary</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="salary"
                value={values.salary}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Fixed Cost</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="fixedCost"
                value={values.fixedCost}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Savings</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="savings"
                value={values.savings}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success is-fullwidth">Save</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MonthlyBudget;
