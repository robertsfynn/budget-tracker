import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  DailyTransactionPage,
  LoginPage,
  RegisterPage,
  FirebaseContext,
} from 'components';

function App() {
  const [isInitiliazed, setIsInitiliazed] = useState(false);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.isInitialized().then(() => {
      setIsInitiliazed(true);
    });
  }, [Firebase]);

  return isInitiliazed ? (
    <Router>
      {/* <Box /> */}
      <Route path="/" exact component={DailyTransactionPage} />
      <Route path="/login/" component={LoginPage} />
      <Route path="/register/" component={RegisterPage} />
    </Router>
  ) : null;
}

export default App;
