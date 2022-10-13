import React from 'react';
import styles from '../../styles/User.module.css';
import UsersCard from './UserCard';
import UserTable from './UserTable';
export const User = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.usertext}>Users</div>
      <div className= {styles.dashpage}>

        <UsersCard/>

      </div>
      <UserTable/>


    </div>
  );
};
