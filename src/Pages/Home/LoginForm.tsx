import React from 'react';
import styles from '../../styles/LoginForm.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Data = {
  email: string;
  password: string;
}

const LoginForm = () => {

  const onSubmit = (data:Data) => console.log(data);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, formState:{ errors } } = useForm<Data>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className= {styles.container}>

        <div>
          <input className= {styles.input} type="email" placeholder="Email" {...register('email')} />
          <p className= {styles.error}>{errors.email?.message}</p>


        </div>

        <div>
          <input className= {styles.input} type="password" placeholder="Password" {...register('password')} />
          <p className= {styles.error}>{errors.password?.message}</p>

        </div>









      </div>

      <button type='submit' className={styles.loginButton}>
         LOG IN
      </button>
    </form>
  );
};

export default LoginForm;