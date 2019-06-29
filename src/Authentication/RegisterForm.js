import React, { useState, useContext, useEffect } from 'react';
import { withFirebase } from '../Firebase';

const RegisterForm = ({ firebase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        setErrorMessage(error.message);
      });
  };

  let showErrorMessage = '';

  if (errorMessage)
    showErrorMessage = (
      <div className="notification is-danger">{errorMessage}</div>
    );

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="title has-text-black has-text-centered">Registration</h1>
      <div className="field">
        <label className="label">E-Mail</label>
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-medium"
            type="email"
            vale={email}
            onChange={(e) => setEmail(e.target.value)}
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
            vale={password}
            onChange={(e) => setPassword(e.target.value)}
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
