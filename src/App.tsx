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
