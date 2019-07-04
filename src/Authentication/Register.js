import React, { useState, useContext } from 'react';
import FirebaseContext from '../Firebase/FirebaseContext';

const RegisterForm = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const Firebase = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await Firebase.register(values.name, values.email, values.password);
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
    <section className="section section-full-height">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <h1 className="title has-text-black has-text-centered">
                  Registration
                </h1>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input is-medium"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input is-medium"
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={values.email}
                      onChange={handleChange}
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
                      Register
                    </button>
                  </p>
                </div>
                {showErrorMessage}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
