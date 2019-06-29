import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import Loader from '../Assets/Loader';
import MonthlyBudget from './MonthlyBudget';

const Main = ({ firebase }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

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

export default withFirebase(Main);
