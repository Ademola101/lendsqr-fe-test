import React from 'react';
import Organization from './OrgFilter';
import { UserType } from '../../../types';
import styles from '../../styles/Filter.module.css';
import UsernameFilter from './UsernameFilter';

type Props = {
  users: UserType[];
}

const index = ({ users }:Props) => {
  return (
    <div className= {styles.filtercard}>

      <Organization users={users} />
      <UsernameFilter />
    </div>
  );
};

export default index;