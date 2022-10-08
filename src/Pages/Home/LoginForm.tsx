import React from 'react';
import InputLabel from './InputLabel';
import styles from '../../styles/LoginForm.module.css';
import { useForm } from 'react-hook-form';

const LoginForm = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm();
  const onSubmit = () => console.log('submit');


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className= {styles.input}>
        <InputLabel  placeholder="Email"  type = 'email' {...register('email')}   />
        <InputLabel type='password'  placeholder="Password" {...register('password')}  />
      </div>

      <button type='submit' className={styles.loginButton}>
         LOG IN
      </button>
    </form>
  );
};

export default LoginForm;