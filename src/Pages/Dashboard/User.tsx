import React from 'react';
import styles from '../../styles/User.module.css';
import UsersCard from './UserCard';
export const User = () => {
  return (
    <div className= {styles.container}>
      <h2 className= {styles.usertext}>Users</h2>
      <div className= {styles.dashpage}>
        <UsersCard/>
      </div>



    </div>
  );
};
