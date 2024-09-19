import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ManagerLogin from './ManagerLogin';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/manager-login" element={<ManagerLogin />} />
        </Routes>
      </Router>
  );
};

export default App;
