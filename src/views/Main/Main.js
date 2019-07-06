import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/FirebaseContext';
import DailyTransaction from './DailyTransaction';
import Navbar from '../../components/Navbar';

const Main = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (!Firebase.getCurrentUser()) history.push('/login');
  }, []);

  return (
    <>
      <Navbar />
      <DailyTransaction />
    </>
  );
};

export default withRouter(Main);
