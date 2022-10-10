import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../../../types';
import { getAllUsers } from '../../Services/API/Users';
import styles from '../../styles/UserTable.module.css';
import ReactPaginate from 'react-paginate';

interface UserTableProps {
  user: UserType
}

interface Paginate {
  selected:number
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
    const newUsers = users?.slice(pagesVisited, pagesVisited + usersPerPage);
    return newUsers?.map((user, i) => <UserTableExcerpt key= {i} user= {user}/>);
  };
  const pageCount:number = Math.ceil(users?.length / usersPerPage);
  const changePage = ({ selected }:Paginate) => {
    setPageNumber(selected);
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
      <div>
        <ReactPaginate previousLabel = {pageNumber > 0 &&  'Previous' }
          pageCount={pageCount}
          onPageChange = {changePage}
          nextLabel = {'next'}
          containerClassName = {
            styles.paginationbtns
          }
          previousLinkClassName = {
            styles.previousbtn
          }
          nextLinkClassName = {
            styles.nextbtn
          }
          disabledClassName = {
            styles.paginationdisabled
          }
          activeClassName = {
            styles.paginationactive
          }

        />
      </div>

    </div>
  );
};

export default UserTable;