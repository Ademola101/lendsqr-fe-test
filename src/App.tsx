import React from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import UserDetails from './Pages/UserDetails';

import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';


function App() {
  const user = useSelector((state: RootState) => state.auth.email);
  return (
    <div>
      <Routes>
        <Route path="/" element={
          user ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/dashboard" element={
          user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/dashboard/users/:id" element={ user ? <UserDetails/> : <Navigate to="/"/>} />


      </Routes>



    </div>
  );
}

export default App;
