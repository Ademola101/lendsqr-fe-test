import React from 'react';
import UserAvatar from './UserAvatar';
import styles from '../../styles/UserDetails.module.css';
import { UserType } from '../../../types';

interface UserDetailsProps {
  user: UserType
}

interface DetailslinkProps {
  link: string
}
const navlinks:string[]  =  [
  'General Details',
  'Documents',
  'Bank Details',
  'Loans',
  'Savings',
  'App and System '

];

const Detailslink = ({ link }: DetailslinkProps) => {

  return (
    <div className= {styles.detailslink}>
      {link}
    </div>
  );
};

const DetailsHead = ({ user }: UserDetailsProps) => {
  const fullnName = `${user?.profile.firstName} ${user?.profile.lastName}`;

  return (

    <div className={styles.detailshead}>
      <div className={styles.avatarname}>
        <img src={user?.profile.avatar} alt="avatar" />

        <div className= {styles.namebvncontainer}>
          <div className={styles.name}>
            {fullnName}

          </div>
          <div className={styles.bvn}>
            {user?.profile.bvn}
          </div>

        </div>



      </div>

      <div className= {styles.tier}>
        User tier

      </div>

      <div className= {styles.balance}>
        <div>
        &#8358;{user?.accountBalance}
        </div>
        <small>
          {user?.accountNumber} {user?.orgName}
        </small>
      </div>
      <div className= {styles.dlink}>
        {navlinks.map((link, i) => <Detailslink key={i} link = {link}/>)}
      </div>

    </div>


  );
};

export default DetailsHead;