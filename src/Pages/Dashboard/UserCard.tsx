import React from 'react';
import UserIcon from './UserIcon';
import ActiveUserIcon from './ActiveUserIcon';
import styles from '../../styles/Usercard.module.css';
import UserWithLoanIcon from './UserWithLoanIcon';
import UserWithSavingIcon from './UserWithSavingIcon';
import { getAllUsers } from '../../Services/API/Users';
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
        <div className= {styles.text}>{user.title}</div>
      </div>
      <div className={styles.number}>
        {user.numbers}
      </div>

    </div>
  );
};



const UsersCard = () => {
  const { data:Users, isLoading, isError } = useQuery(['users'], getAllUsers);
  const users:UserType[] | undefined = Users;
  const totalUsers:number|undefined = users?.length;

  const usersWithLoan:number|undefined = users?.filter((user) => user.education.loanRepayment).length;



  const data:Array<User> = [
    { icon:<UserIcon/>,
      title: 'Users',
      numbers: totalUsers?.toString()

    },
    {
      icon:<ActiveUserIcon/>,
      title: 'Active Users'
    },

    {
      icon:<UserWithLoanIcon/>,
      title: 'Users with loan',
      numbers: usersWithLoan?.toString()
    },
    {
      icon:<UserWithSavingIcon/>,
      title: 'Users with saving'
    }
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;

  }
  return (


    <div className= {styles.container}>

      {data.map((d, i) => <UserCard key={i} user = {d}/>)}
    </div>
  );
};

export default UsersCard;