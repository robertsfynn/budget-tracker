import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../../../Firebase/FirebaseContext';
import Box from '../..';
import Titl from '../../atoms/Title';

const HomePage = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  console.log(<Box />);
  // useEffect(() => {
  //   if (!Firebase.getCurrentUser()) history.push('/login');
  // }, []);
  console.log('hello');
  return <div>Hello</div>;
};

export default withRouter(HomePage);
