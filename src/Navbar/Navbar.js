import React, { useState, useContext } from 'react';
import FirebaseContext from '../Firebase/FirebaseContext';

const Navbar = () => {
  const Firebase = useContext(FirebaseContext);
  const [active, setActive] = useState(false);

  let navbarButton = (
    <div className="buttons">
      <a className="button is-primary">
        <strong>Sign up</strong>
      </a>
      <a className="button is-light">Log in</a>
    </div>
  );

  if (Firebase.getCurrentUser()) {
    console.log(Firebase.getCurrentUser());
    navbarButton = (
      <a onClick={Firebase.logout} className="button is-light">
        Log in
      </a>
    );
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger ${active ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setActive(!active)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active ? 'is-active' : ''}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">{navbarButton}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
