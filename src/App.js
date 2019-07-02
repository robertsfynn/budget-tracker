import React, { useContext, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Main from './Main/Main';
import Login from './Authentication/Login';
import RegisterForm from './Authentication/RegisterForm';
import FirebaseContext from './Firebase/FirebaseContext';
import Loader from './Assets/Loader';
import './App.css'

function App() {
  const firebase = useContext(FirebaseContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized ? (
    <div className="App">
      <Main />
    </div>
  ) : (
    <Loader />
  );
}

export default App;
