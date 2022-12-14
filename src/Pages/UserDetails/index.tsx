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
import { getFetchedData } from '../../Services/localStorage';


type id = string | undefined;
const index = () => {

  const { id } = useParams<{ id: id }>();
  const { data:fetcheduser, isLoading, isError } =  useQuery(['user', id], () => getUser(id as string));


  const user = () => {
    if (getFetchedData(`user${id}`)) {
      return getFetchedData(`user${id}`) as UserType;
    }






    return fetcheduser as UserType;

  };

  if (isLoading) {
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

            <DetailsHead user={user()}/>
            <PersonalInformation user={user()}/>
            <Education user={user()}/>
            <Socials user={user()}/>
            <Guarantor user={user()}/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default index;