import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './Authentication/Login';
import Main from './Main/Main';
import RegisterForm from './Authentication/RegisterForm';

function App() {
  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
