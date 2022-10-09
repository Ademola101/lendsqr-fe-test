import React from 'react';
import UserIcon from './UserIcon';
import ActiveUserIcon from './ActiveUserIcon';
import styles from '../../styles/Usercard.module.css';
import UserWithLoanIcon from './UserWithLoanIcon';
import UserWithSavingIcon from './UserWithSavingIcon';
import { getAllUsers } from '../../Services/Users';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../../../types';

interface User {
icon: JSX.Element;
title?: string;
numbers?: string;
}
interface Props {
  user:User

}

const UserCard = ({ user }:Props) => {
  return (
    <div className= {styles.card}>
      <div>
        {user.icon}
      </div>
      <div>
        <div>{user.title}</div>
      </div>
      <div>
        {user.numbers}
      </div>

    </div>
  );
};



const UsersCard = () => {
  const { data:Users, isLoading, isError } = useQuery(['users'], getAllUsers);
  console.log(Users);




  const data:Array<User> = [
    { icon:<UserIcon/>,
      title: 'Users'

    },
    {
      icon:<ActiveUserIcon/>,
      title: 'Active Users'
    },

    {
      icon:<UserWithLoanIcon/>,
      title: 'Users with loan'
    },
    {
      icon:<UserWithSavingIcon/>,
      title: 'Users with saving'
    }
  ];
  return (
    <div className= {styles.container}>

      {data.map((d, i) => <UserCard key={i} user = {d}/>)}
    </div>
  );
};

export default UsersCard;