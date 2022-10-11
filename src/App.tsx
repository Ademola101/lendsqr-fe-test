import React from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import UserDetails from './Pages/UserDetails';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/users/:id" element={<UserDetails/>} />

      </Routes>



    </div>
  );
}

export default App;
