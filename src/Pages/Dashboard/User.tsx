import React from 'react';
import styles from '../../styles/User.module.css';
import UsersCard from './UserCard';
import UserTable from './UserTable';
import { UserType } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../Services/API/Users';
import  BeatLoader  from 'react-spinners/BeatLoader';
import Filter from '../../Components/Filter';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { showDropDown } from '../../reducers/Filter/dropdown';

export const User = () => {
  const { data, isLoading, isError } = useQuery(['users'], getAllUsers);
  const dispatch = useDispatch<AppDispatch>();
  const users: UserType[] |  undefined = data;
  const dropDownState = useSelector((state:RootState) => state.dropdown);
  const handleDropDown = (): void => {
    dispatch(showDropDown());


  };

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
      <UserTable usersProp={users} handleDropDown = {handleDropDown}/>

      {dropDownState && <Filter users={users}/>}
    </div>
  );
};
