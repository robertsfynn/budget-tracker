import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Login from './views/Authentication/Login';
import Register from './views/Authentication/Register';
import FirebaseContext from './components/Firebase/FirebaseContext';

function App() {
  const [isInitiliazed, setIsInitiliazed] = useState(false);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.isInitialized().then(() => {
      setIsInitiliazed(true);
    });
  }, []);

  return isInitiliazed ? (
    <Router>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    </Router>
  ) : null;
}

export default App;
