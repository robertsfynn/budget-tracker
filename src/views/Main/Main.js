import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../../components/Firebase/FirebaseContext';
import DailyTransaction from './DailyTransaction';
import Navbar from '../../components/Navbar';
import DailyTransactionForm from '../DailyTransactionForm/DailyTransactionForm';

const Main = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (!Firebase.getCurrentUser()) history.push('/login');
  }, []);

  return (
    <>
      {/* <Navbar />
      <DailyTransaction /> */}
      <DailyTransactionForm/>
    </>
  );
};

export default withRouter(Main);
