import React from 'react';
import styles from '../../styles/User.module.css';
import UsersCard from './UserCard';
import UserTable from './UserTable';
import { UserType } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../Services/API/Users';
import  BeatLoader  from 'react-spinners/BeatLoader';
export const User = () => {
  const { data, isLoading, isError } = useQuery(['users'], getAllUsers);
  const users: UserType[] |  undefined = data;

  while (isLoading) {
    return  <div className= {styles.loading}><BeatLoader color={'#123abc'} loading={isLoading} size={20} /></div>;



  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className= {styles.container}>
      <div className= {styles.usertext}>Users</div>
      <div className= {styles.dashpage}>

        <UsersCard users={users}/>

      </div>
      <UserTable usersProp={users}/>


    </div>
  );
};
