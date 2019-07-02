import React, { useState, useContext, useEffect } from 'react';
import { withFirebase } from '../Firebase';

const RegisterForm = ({ firebase }) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch(function(error) {
        setErrorMessage(error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  let showErrorMessage = '';

  if (errorMessage)
    showErrorMessage = (
      <div className="notification is-danger">{errorMessage}</div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title has-text-black has-text-centered">Registration</h1>
      <div className="field">
        <label className="label">E-Mail</label>
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-medium"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <p className="control has-icons-left">
          <input
            className="input is-medium"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button className="button is-fullwidth is-success">Register</button>
        </p>
      </div>
      {showErrorMessage}
    </form>
  );
};

export default withFirebase(RegisterForm);
