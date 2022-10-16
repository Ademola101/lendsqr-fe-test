import React, { useState } from 'react';
import styles from '../../styles/UserTable.module.css';
import { UserType } from '../../../types';
import StatusVectorIcon from './Icons/StatusVectorIcon';
import ViewDetails from './ViewDetails';

interface UserTableProps {
  user: UserType
}

const UserTableExcerpt = ({ user }:UserTableProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleDropDown = () => {
    setShowDetails(!showDetails);
  };

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
        <span > <div className= {user.status === 'Active' ? styles.active
          : user.status === 'Inactive'
            ? styles.inactive : user.status === 'Pending'
              ? styles.pending :
              styles.blacklisted}>
          {user.status} <StatusVectorIcon onClick={handleDropDown}/>


        </div> </span>


      </div>
      {showDetails && <ViewDetails user={user} />}

    </div>
  );
};

export default UserTableExcerpt;

