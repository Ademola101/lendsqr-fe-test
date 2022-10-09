import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import CustomerLinks from './CustomerLink';

const Sidebar = () => {
  return (
    <div className= {styles.container}>
      <div>
Switch Organization
      </div>
      <div>
  Dashboard
      </div>
      <CustomerLinks/>

    </div>
  );
};

export default Sidebar;