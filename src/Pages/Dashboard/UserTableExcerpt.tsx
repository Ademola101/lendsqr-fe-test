import React from 'react';
import styles from '../../styles/UserTable.module.css';
import { UserType } from '../../../types';
import StatusVectorIcon from './StatusVectorIcon';

interface UserTableProps {
  user: UserType
}

const UserTableExcerpt = ({ user }:UserTableProps) => {

  const setDateFormat = (date:string) => {
    const newDate:string = new Date(date).toLocaleDateString(
      'en-US',
      {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    );
    return newDate;

  };
  return (
    <div>
      <div className= {styles.excerptcontainer}>
        <span className= {styles.headertext}>{user.orgName}</span>
        <span className= {styles.headertext}>{user.userName}</span>
        <span className= {styles.headertext}>{user.email}</span>
        <span className= {styles.headertext}>{user.phoneNumber}</span>
        <span className= {styles.headertext}>{setDateFormat(user.createdAt)}</span>
        <span className= {styles.headertextstatus}>Active <StatusVectorIcon/></span>
      </div>
    </div>
  );
};

export default UserTableExcerpt;

