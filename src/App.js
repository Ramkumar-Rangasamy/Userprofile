// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileRoutes from '../src/Components/ProfilePage/Routes/ProfileRoutes';
function App() {
  return (
   < Router>
    <ProfileRoutes/>  
   </Router>
      
  );
}

export default App;
