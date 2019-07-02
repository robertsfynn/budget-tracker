import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1 className="title has-text-black has-text-centered">Login</h1>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-medium"
            type="email"
            vale={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input is-medium"
            type="password"
            placeholder="Password"
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
          <button className="button is-fullwidth is-success">Login</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
