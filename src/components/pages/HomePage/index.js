import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from 'components';

const HomePage = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  useEffect(() => {
    if (!Firebase.getCurrentUser()) history.push('/login');
  }, []);

  return <div />;
};

export default withRouter(HomePage);
