import React from 'react';
import PabloLogo from './PabloLogo';
import styles from '../../styles/Home.module.css';
import Welcome from './Welcome';
const index = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.pablo}>
        <PabloLogo/>
      </div>
      <div className= {styles.welcome}>
        <Welcome/>
      </div>


    </div>
  );
};

export default index;