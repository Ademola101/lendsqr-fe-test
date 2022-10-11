import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../Services/API/Users';
import { UserType } from '../../../types';
import styles from '../../styles/UserDetails.module.css';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import DetailsHead from './DetailsHead';
import { Link } from 'react-router-dom';
import ArrowBackIcon from './ArrowBackIcon';

type id = string | undefined;
const index = () => {

  const { id } = useParams<{ id: id }>();

  const { data: user } = useQuery(['user', id], () => getUser(id as string));

  const User = user as UserType;

  return (
    <div >
      <Header/>

      <div className= {styles.container}>


        <div className={styles.sidebar}>
          <Sidebar/>
        </div>
        <div className= {styles.body}>
          <p> {
            <Link className= {styles.link} to= '/dashboard'> <ArrowBackIcon/>back to user   </Link>

          }</p>
          <DetailsHead user={User}/>
        </div>
      </div>
    </div>
  );
};

export default index;