import React from 'react';
import UserIcon from './UserIcon';
import ActiveUserIcon from './ActiveUserIcon';
import styles from '../../styles/Usercard.module.css';
import UserWithLoanIcon from './UserWithLoanIcon';
import UserWithSavingIcon from './UserWithSavingIcon';
import { UserType } from '../../../types';


interface User {
icon: JSX.Element;
title?: string;
numbers?: string;
}
interface UserCardProps {
  user:User,


}

interface Props {
  users: UserType[] | undefined;
}

const UserCard = ({ user }:UserCardProps) => {
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



const UsersCard = ({ users }:Props) => {
  const totalUsers:number|undefined = users?.length;

  const usersWithLoan:number|undefined = users?.filter((user) => user.education.loanRepayment!== '0').length;
  const userWithSavings:number|undefined = users?.filter((user) => user.accountBalance !=='0').length;



  const data:Array<User> = [
    { icon:<UserIcon/>,
      title: 'Users',
      numbers: totalUsers?.toString()

    },
    {
      icon:<ActiveUserIcon/>,
      title: 'Active Users',
      numbers: totalUsers?.toString()
    },

    {
      icon:<UserWithLoanIcon/>,
      title: 'Users with loan',
      numbers: usersWithLoan?.toString()
    },
    {
      icon:<UserWithSavingIcon/>,
      title: 'Users with saving',
      numbers: userWithSavings?.toString()
    }
  ];

  return (


    <div className= {styles.container}>

      {data.map((d, i) => <UserCard key={i} user = {d}/>)}
    </div>
  );
};

export default UsersCard;