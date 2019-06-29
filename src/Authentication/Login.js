import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="box column is-two-fifths">
              <LoginForm />
              <p className="is-centered">
                Dont have an Account? Register here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
