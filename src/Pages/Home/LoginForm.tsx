import React from 'react';
import InputLabel from './InputLabel';
import styles from '../../styles/LoginForm.module.css';

const LoginForm = () => {
  return (
    <form >

      <div className= {styles.input}>
        <InputLabel name="email" placeholder="Email" value="" onChange={() => {console.log('helo');}} type = {'email'}/>
        <InputLabel type='password' name="password" placeholder="Password" value="" onChange={() => {console.log('helo');
        }}/>
      </div>

      <button type='submit' className={styles.loginButton}>
         LOG IN
      </button>
    </form>
  );
};

export default LoginForm;