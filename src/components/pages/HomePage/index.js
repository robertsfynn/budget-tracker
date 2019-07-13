import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from 'components';
import PropTypes from 'prop-types';

const HomePage = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  useEffect(() => {
    if (!Firebase.getCurrentUser()) history.push('/login');
  }, [Firebase, history]);

  return <div />;
};

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomePage);
