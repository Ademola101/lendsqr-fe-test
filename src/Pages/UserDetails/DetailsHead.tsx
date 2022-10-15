import React from 'react';
import styles from '../../styles/UserDetails.module.css';
import { UserType } from '../../../types';
import StarIcon from './StarIcon';

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

    <a  className= {styles.detailslink} href="#">

      {link}

    </a>

  );
};

const DetailsHead = ({ user }: UserDetailsProps) => {
  const fullnName = `${user?.profile.firstName} ${user?.profile.lastName}`;

  return (

    <div className={styles.detailshead}>
      <div className={styles.avatarname}>

        <img className= {styles.img} src={user?.profile.avatar} alt="avatar" />

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
        <div>
        User tier
        </div>
        <div>

          <StarIcon/> <StarIcon/><StarIcon/>

        </div>
      </div>
      <div>
        <div className= {styles.balance}>
          <div>
        &#8358;{user?.accountBalance}
          </div>
        </div>
        <small className= {styles.accountsmall}>
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