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
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import Socials from './Socials';
import Guarantor from './Guarantor';
import  BeatLoader  from 'react-spinners/BeatLoader';

type id = string | undefined;
const index = () => {

  const { id } = useParams<{ id: id }>();

  const { data: user, isLoading, isError } = useQuery(['user', id], () => getUser(id as string));

  const User = user as UserType;
  while (isLoading) {
    return  <div className= {styles.loading}><BeatLoader color={'#123abc'} loading={isLoading} size={20} /></div>;



  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div >
      <Header/>

      <div className= {styles.container}>


        <div className={styles.sidebar}>
          <Sidebar/>
        </div>
        <div className= {styles.body}>
          <p> {
            <Link className= {styles.link} to= '/dashboard'> <ArrowBackIcon/> <span> Back to Users</span>   </Link>

          }</p>
          <p className= {styles.userptext}>
            User Details
          </p>
          <div className= {styles.infocontainer}>

            <DetailsHead user={User}/>
            <PersonalInformation user={User}/>
            <Education user={User}/>
            <Socials user={User}/>
            <Guarantor user={User}/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default index;