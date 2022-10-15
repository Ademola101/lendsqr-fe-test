import React, { useState } from 'react';
import { UserType } from '../../../types';

import styles from '../../styles/UserTable.module.css';
import ReactPaginate from 'react-paginate';
import UserTableExcerpt from './UserTableExcerpt';
import TableHeaderIcon from './TableHeaderIcon';
import ArrowLeft from './ArrorLeft';
import ArrowRight from './ArrowRight';
import { Link } from 'react-router-dom';
import Filter from '../../Components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { RootState } from '../../store';
import { showDropDown } from '../../reducers/Filter/dropdown';


interface Paginate {
  selected:number
}
interface Props {
  usersProp: UserType[] | undefined;
}
const UserTable = ({ usersProp }:Props) => {
  const filterValue = useSelector((state:RootState) => state.filter.organization.value);
  const [pageNumber,setPageNumber] = useState<number>(0);

  const dispatch:AppDispatch = useDispatch();
  const showDropdown = useSelector((state:RootState) => state.dropdown);
  const handleDropDown = (): void => {
    dispatch(showDropDown());


  };


  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const users:UserType[] = (usersProp as UserType[]);

  const USERS = filterValue ? users.filter((user ) => user.orgName === filterValue) : users;
  const displayUsers = () => {
    const newUsers = USERS?.slice(pagesVisited, pagesVisited + usersPerPage);

    return newUsers?.map((user, i) => <Link className= {styles.routerlink} to= {`/dashboard/users/${user.id}`} key= {i}><UserTableExcerpt user= {user}/></Link>);


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
        showing {usersPerPage * pageNumber + 1} to {usersPerPage * pageNumber + usersPerPage}
        of {users?.length} entries
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
    {showDropdown && <Filter users={users}/>}
  </div>
  );
};

export default UserTable;
