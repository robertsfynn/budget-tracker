import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../Firebase/FirebaseContext';

const Navbar = () => {
  const Firebase = useContext(FirebaseContext);
  const [active, setActive] = useState(false);

  let navbarButton;

  if (Firebase.getCurrentUser()) {
    navbarButton = (
      <Link onClick={Firebase.logout} className="button is-light">
        Logout
      </Link>
    );
  } else {
    navbarButton = (
      <div className="buttons">
        <Link to="/register/" className="button is-primary">
          <strong>Sign up</strong>
        </Link>

        <Link to="/login/" className="button is-light">
          Login
        </Link>
      </div>
    );
  }

  console.log(Firebase.getCurrentUser());

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
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
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">{navbarButton}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
