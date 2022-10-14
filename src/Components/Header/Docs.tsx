import React, { useState } from 'react';
import BellIcon from './BellIcon';
import styles from '../../styles/Header.module.css';
import Logout from './Logout';
const Docs = () => {

  const [dropdown, showDropDown] = useState(false);
  return (
    <div className= {styles.belliconcontainer}>



      <a className= {styles.docslink} href="#">Docs</a>
      <BellIcon />

      <img className= {styles.img}  src="/images/profile.png" alt="profile" />

      <div onClick={() => showDropDown(!dropdown)} className= {styles.name}>
          Adedeji <span >
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z" fill="#213F7D"/>
          </svg>
          {dropdown ? <Logout /> : null}

        </span>

      </div>

    </div>
  );
};

export default Docs;