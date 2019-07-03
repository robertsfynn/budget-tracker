import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Main from './Main/Main';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Loader from './Assets/Loader';
import FirebaseContext from './Firebase/FirebaseContext';
import './App.css';
import Navbar from './Navbar/Navbar';

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
        <Navbar />
        {isInitiliazed ? (
          <>
            <Route path="/" exact component={Main} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={Register} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Router>
  );
}

export default App;
