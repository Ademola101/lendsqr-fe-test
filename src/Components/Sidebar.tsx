import React from 'react';
import styles from '../styles/Sidebar.module.css';
import CustomerLinks from './CustomerLink';
import SwitchLink from '../Components/LinksIcon/SwitchIcon';
import DashLink from './LinksIcon/DashLinkIcon';

const Sidebar = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.switchcontainer}>
        <a className= {styles.switch} href="#"><SwitchLink/>  Switch Organization </a>


        <div>
          <a className= {styles.switch} href="#"><DashLink/> Dashboard</a>
        </div>

      </div>

      <CustomerLinks/>

    </div>
  );
};

export default Sidebar;