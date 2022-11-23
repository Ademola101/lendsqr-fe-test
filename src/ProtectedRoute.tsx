import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from './store';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const loggedUser = useSelector((state: RootState) => state.auth.email);

  const location = useLocation();



  return (
    <>

      {loggedUser ? (
        children
      ) : (
        <Navigate
          to= '/'
          state={{ from: location }}
        />
      )}

    </>
  );
};

export default ProtectedRoute;