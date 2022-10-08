import React from 'react';
import styles from '../../styles/Welcome.module.css';
import InputLabel from './InputLabel';

const Welcome = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.welcontainer}>


        <div className= {styles.weltext}>
      Welcome!
        </div>
        <small> Enter details to login</small>
      </div>

      <div>
        <InputLabel name="email" placeholder="Email" value="" onChange={() => {console.log('helo');}} type = {'email'}/>
        <InputLabel type='password' name="password" placeholder="Password" value="" onChange={() => {console.log('helo');
        }}/>
      </div>

    </div>
  );
};

export default Welcome;