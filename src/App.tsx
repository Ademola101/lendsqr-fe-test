import React, { useEffect } from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import UserDetails from './Pages/UserDetails';
import { getLocalStorageItem } from './Services/localStorage';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { setCredentials } from './reducers/Auth';
import { AppDispatch } from './store';
import { RootState } from './store';
import ProtectedRoute from './ProtectedRoute';


function App() {


  const navigate  = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const credentials = getLocalStorageItem('credentials');
    if (credentials) {
      dispatch(setCredentials(JSON.parse(credentials)));
      navigate('/dashboard');
    }
  }, []);

  const loggedUser = useSelector((state: RootState) => state.auth.email);


  return (
    <div>
      <Routes>
        <Route path='/' element={loggedUser ? <Navigate to='/dashboard' /> : <Home />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/dashboard/users/:id' element={<ProtectedRoute><UserDetails /></ProtectedRoute>} />
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>



    </div>
  );
}

export default App;
