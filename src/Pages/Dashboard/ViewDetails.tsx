import React from 'react';
import { UserType } from '../../../types';

import { Link } from 'react-router-dom';
import styles from '../../styles/ViewDetails.module.css';

interface ViewDetailsProps {
  user: UserType;

}

const ViewDetails = ({ user }:ViewDetailsProps) => {
  return (
    <div className= {styles.container}>

      <Link className= {styles.link} to = {`/dashboard/users/${user.id}`}>
        <span>View Details</span>
      </Link>
      <div className= {styles.link}>
          Blacklist user
      </div>

      <div className= {styles.link}>
          Activate user
      </div>


    </div>
  );
};

export default ViewDetails;