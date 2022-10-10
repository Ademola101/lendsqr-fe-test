import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../../../types';
import { getAllUsers } from '../../Services/API/Users';
import styles from '../../styles/UserTable.module.css';
import ReactPaginate from 'react-paginate';

interface UserTableProps {
  user: UserType
}

const UserTableExcerpt = ({ user }:UserTableProps) => {

  const getDate = (date:string) => {
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
        <span className= {styles.headertext}>{getDate(user.createdAt)}</span>
        <span className= {styles.headertext}>Active</span>
      </div>
    </div>
  );
};

const UserTable = () => {
  const [pageNumber,setPageNumber] = useState<number>(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const { data:Users } = useQuery(['users'], getAllUsers);
  const users:UserType[] = Users as UserType[];
  const displayUsers = (users:UserType[]) => {
    const newUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);
    return newUsers.map((user, i) => <UserTableExcerpt key= {i} user= {user}/>);
  };

  return (
    <div className= {styles.tablecontainer}>

      <div className= {styles.tableheader}>
        <span className= {styles.header}>Organization</span>  <span className= {styles.header}>User Name</span>
        <span className= {styles.header}>Email</span>
        <span className= {styles.header}>Phone Number</span>
        <span className= {styles.header}>Date joined</span> <span className= {styles.headertext}>Status</span>
      </div>
      {displayUsers(users)}
    </div>
  );
};

export default UserTable;