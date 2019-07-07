import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './';
import FirebaseContext from '../Firebase/FirebaseContext';

function App() {
  const [isInitiliazed, setIsInitiliazed] = useState(false);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    console.log('hello');
    Firebase.isInitialized().then(() => {
      setIsInitiliazed(true);
    });
  }, [Firebase]);

  console.log(HomePage);

  return (
    <Router>
      <HomePage/>
      {/* <Box /> */}
      {/* <Route path="/" exact component={HomePage} />
      <Route path="/login/" component={LoginPage} />
      <Route path="/register/" component={RegisterPage} /> */}
    </Router>
  );
}

export default App;
