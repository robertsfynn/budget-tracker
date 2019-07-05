import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import FirebaseContext from './components/Firebase/FirebaseContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isInitiliazed, setIsInitiliazed] = useState(false);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.isInitialized().then(() => {
      setIsInitiliazed(true);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {isInitiliazed ? (
          <>
            {/* <Navbar /> */}
            <Route path="/" exact component={Main} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={Register} />
          </>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
