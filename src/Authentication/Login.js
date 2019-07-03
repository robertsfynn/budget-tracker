import React, { useState, useContext } from 'react';
import FirebaseContext from '../Firebase/FirebaseContext';

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const Firebase = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.login(values.email, values.password).then((user) => {
      console.log(user);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <section className="section section-full-height">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <h1 className="title has-text-black has-text-centered">
                  Login
                </h1>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input is-medium"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
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
                      name="password"
                      placeholder="Password"
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
                    <button className="button is-fullwidth is-success">
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
