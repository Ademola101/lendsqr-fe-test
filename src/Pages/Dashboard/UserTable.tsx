import React, { useState } from 'react';
import { UserType } from '../../../types';

import styles from '../../styles/UserTable.module.css';
import ReactPaginate from 'react-paginate';
import UserTableExcerpt from './UserTableExcerpt';
import TableHeaderIcon from './Icons/TableHeaderIcon';
import ArrowLeft from './Icons/ArrorLeft';
import ArrowRight from './Icons/ArrowRight';

import { useSelector } from 'react-redux';

import { RootState } from '../../store';

interface Paginate {
  selected:number
}
interface Props {
  usersProp: UserType[] | undefined;
  handleDropDown: () => void;
}
const UserTable = ({ usersProp, handleDropDown }:Props) => {
  const filterValue = useSelector((state:RootState) => state.filter.organization.value);
  const [pageNumber,setPageNumber] = useState<number>(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const users:UserType[] = (usersProp as UserType[]);



  const filterUsers = filterValue ? users.filter((user ) => user.orgName === filterValue) : users;
  const displayUsers = () => {
    const newUsers = filterUsers?.slice(pagesVisited, pagesVisited + usersPerPage);

    return newUsers?.map((user) => (<div key = {user.id}>
      <UserTableExcerpt user= {user} />

    </div>) );


  };

  const pageCount:number = Math.ceil(users?.length / usersPerPage);

  const changePage = ({ selected }:Paginate) => {
    setPageNumber(selected);
  };

  return ( <div className= {styles.dropdowntable}>
    <div className= {styles.tablecontainer}>

      <div className= {styles.tableheader}>
        <span className= {styles.header}> <div className= {styles.headerorg}>Organization</div> <TableHeaderIcon onClick={handleDropDown}/> </span>
        <span className= {styles.header}> <div className= {styles.headerorg}> User Name</div><TableHeaderIcon onClick={handleDropDown}/></span>
        <span className= {styles.header}> <div className= {styles.headerorg}> Email</div> <TableHeaderIcon onClick={handleDropDown}/></span>
        <span className= {styles.header}> <div className= {styles.headerorg}> Phone Number</div> <TableHeaderIcon onClick={handleDropDown}/></span>
        <span className= {styles.header}> <div className= {styles.headerorg}> Date joined</div> <TableHeaderIcon onClick={handleDropDown}/></span>
        <span className= {styles.header}> <div className= {styles.headerorg}> Status</div>  <TableHeaderIcon/></span>
      </div>
      {displayUsers()}
      <div className= {styles.showpagecontainer}> <div className= {styles.showing}>
        showing {usersPerPage * pageNumber + 1} to {usersPerPage * pageNumber + usersPerPage} of {users?.length} entries
      </div> { filterUsers?.length > 10 && (<ReactPaginate previousLabel = {pageNumber > 0 &&  <ArrowLeft/> }
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

      />)

      }
      </div>

    </div>

  </div>
  );
};

export default UserTable;
