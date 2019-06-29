import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { db } from './Firebase/Firebase';
import Login from './Authentication/Login';

function App() {
  db.collection('categories')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
