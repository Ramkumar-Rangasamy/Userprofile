// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileRoutes from './components/ProfilePage/ProfileRoutes/ProfileRoutes';


function App() {
  return (
    <Router>
      <ProfileRoutes/>
    </Router>
  );
}

export default App;
