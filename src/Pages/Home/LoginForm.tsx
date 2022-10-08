import React, { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Data = {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, formState:{ errors }, watch } = useForm<Data>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data:Data) => console.log(data);
  const passwordValue = watch('password');

  const togglePassword = () => {


    if (passwordValue) {
      setShowPassword(!showPassword);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className= {styles.container}>

        <div>
          <input className= {styles.input} type="email" placeholder="Email" {...register('email')} />
          <p className= {styles.error}>{errors.email?.message}</p>


        </div>

        <div>
          <input className= {styles.input} type={ showPassword ? 'text' : 'password'} placeholder="Password" {...register('password')}  />
          <p className= {styles.error}>{errors.password?.message}</p>
          {passwordValue && <div className= {styles.showHidePassword}  onClick={togglePassword}>{showPassword ? 'Hide' : 'Show'}</div>}

        </div>
      </div>

      <button type='submit' className={passwordValue ? styles.loginButtonShow : styles.loginButton}>
         LOG IN
      </button>
    </form>
  );
};

export default LoginForm;