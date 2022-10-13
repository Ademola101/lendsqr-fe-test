import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { User } from './User';
import styles from '../../styles/Dashboard.module.css';

const index = () => {
  return (
    <div>


      <Header />

      <div className= {styles.sidebarUser}>
        <div className= {styles.sidebar}>
          <Sidebar/>

        </div>

        <div className= {styles.user}>
          <User/>
        </div>
      </div>


    </div>
  );
};

export default index;