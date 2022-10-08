import React from 'react';
import styles from '../../styles/Welcome.module.css';
import LoginForm from './LoginForm';

const Welcome = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.welcontainer}>


        <div className= {styles.weltext}>
      Welcome!
        </div>
        <small> Enter details to login.</small>
      </div>

      <LoginForm/>




    </div>
  );
};

export default Welcome;