import React, { useEffect } from 'react';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import UserDetails from './Pages/UserDetails';
import { getLocalStorageItem } from './Services/localStorage';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from './reducers/Auth';
import { AppDispatch } from './store';
import { RootState } from './store';


function App() {


  const navigate  = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const credentials = getLocalStorageItem('credentials');
    if (credentials) {
      navigate('/dashboard');
      dispatch(setCredentials(JSON.parse(credentials)));
    }
  }, []);

  const loggedUser = useSelector((state: RootState) => state.auth.email);
  return (
    <div>
      <Routes>
        <Route path="/" element={
          loggedUser ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/dashboard" element={
          loggedUser ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/dashboard/users/:id" element={loggedUser ? <UserDetails/> : <Navigate to="/"/>} />


      </Routes>



    </div>
  );
}

export default App;
