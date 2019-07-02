import React, { useContext, useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Main from './Main/Main';
import Login from './Authentication/Login';
import RegisterForm from './Authentication/RegisterForm';
import Loader from './Assets/Loader';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
