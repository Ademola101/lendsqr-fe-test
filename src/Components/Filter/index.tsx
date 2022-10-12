import React from 'react';
import Organization from './Organization';
import { UserType } from '../../../types';
import styles from '../../styles/Filter.module.css';

type Props = {
  users: UserType[];
}

const index = ({ users }:Props) => {
  return (
    <div className= {styles.filtercard}>

      <Organization users={users} />
    </div>
  );
};

export default index;