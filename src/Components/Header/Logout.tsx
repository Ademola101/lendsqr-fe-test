import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { removeCredentials } from '../../reducers/Auth';
import { removeLocalStorageItem } from '../../Services/localStorage';
import styles from '../../styles/Header.module.css';

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(removeCredentials());
    removeLocalStorageItem('credentials');
  };
  return (
    <div className= {styles.dropdown} onClick={handleLogout}>Logout</div>
  );
};

export default Logout;