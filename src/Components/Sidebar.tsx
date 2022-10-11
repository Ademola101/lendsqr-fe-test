import React from 'react';
import styles from '../styles/Sidebar.module.css';
import CustomerLinks from '../Pages/Dashboard/CustomerLink';

const Sidebar = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.switchcontainer}>
        <a className= {styles.switch} href="#"> Switch Organization</a>


        <div>
          <a className= {styles.switch} href="#"> Dashboard</a>
        </div>

      </div>

      <CustomerLinks/>

    </div>
  );
};

export default Sidebar;