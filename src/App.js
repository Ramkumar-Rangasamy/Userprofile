// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileRoutes from './Components/ProfilePage/Routes/ProfileRoutes'; // Ensure this path is correct
function App() {
  return (
    <Router>
      <ProfileRoutes/>
    </Router>
  );
}

export default App;
