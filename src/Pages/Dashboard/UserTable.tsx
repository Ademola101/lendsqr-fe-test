import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../../../types';
import { getAllUsers } from '../../Services/API/Users';
import styles from '../../styles/UserTable.module.css';
import ReactPaginate from 'react-paginate';
import UserTableExcerpt from './UserTableExcerpt';
import TableHeaderIcon from './TableHeaderIcon';
import ArrowLeft from './ArrorLeft';
import ArrowRight from './ArrowRight';
import { Link } from 'react-router-dom';


interface Paginate {
  selected:number
}
const UserTable = () => {
  const [pageNumber,setPageNumber] = useState<number>(0);
  const { data:Users } = useQuery(['users'], getAllUsers);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const users:UserType[] = Users as UserType[];

  const displayUsers = (users:UserType[]) => {
    const newUsers = users?.slice(pagesVisited, pagesVisited + usersPerPage);

    return newUsers?.map((user, i) => <Link className= {styles.routerlink} to= {`/dashboard/users/${user.id}`} key= {i}><UserTableExcerpt user= {user}/></Link>);


  };

  const pageCount:number = Math.ceil(users?.length / usersPerPage);

  const changePage = ({ selected }:Paginate) => {
    setPageNumber(selected);
  };

  return (
    <div className= {styles.tablecontainer}>

      <div className= {styles.tableheader}>
        <span className= {styles.header}>Organization <TableHeaderIcon/></span>  <span className= {styles.header}>User Name <TableHeaderIcon/></span>
        <span className= {styles.header}>Email <TableHeaderIcon/></span>
        <span className= {styles.header}>Phone Number <TableHeaderIcon/></span>
        <span className= {styles.header}>Date joined <TableHeaderIcon/></span> <span className= {styles.header}>Status  <TableHeaderIcon/></span>
      </div>
      {displayUsers(users)}
      <div className= {styles.showpagecontainer}> <div className= {styles.showing}>
showing {usersPerPage * pageNumber + 1} to {usersPerPage * pageNumber + usersPerPage} of {users?.length} entries
      </div>
      <ReactPaginate previousLabel = {pageNumber > 0 &&  <ArrowLeft/> }
        pageCount={pageCount}
        onPageChange = {changePage}
        nextLabel = {pageNumber < pageCount - 1 && <ArrowRight/>}
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