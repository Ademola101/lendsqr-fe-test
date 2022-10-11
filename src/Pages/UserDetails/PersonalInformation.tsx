import React from 'react';
import { UserType } from '../../../types';
import PersonalExcerpt from './PersonalExcerpt';
import styles from '../../styles/Personal.module.css';


interface PersonalInformationProps {
  user: UserType
}



const PersonalInformation = ({ user }:PersonalInformationProps) => {
  const fullName = `${user?.profile.firstName} ${user?.profile.lastName}`;
  return (
    <div className= {styles.bodycontainer}>
      <p className= {styles.information}> Personal Information</p>


      <div className= {styles.container}>
        <PersonalExcerpt name= ' full name ' value= {fullName}/>
        <PersonalExcerpt name= ' phone number ' value= {user?.phoneNumber}/>
        <PersonalExcerpt name= ' email address ' value= {user?.email}/>
        <PersonalExcerpt name= ' bvn ' value= {user?.profile.bvn}/>
        <PersonalExcerpt name= ' gender ' value= {user?.profile.gender}/>
        <PersonalExcerpt name= ' Marital status ' value= 'Single'/>
        <PersonalExcerpt name= ' Children ' value= 'None'/>
        <PersonalExcerpt name= ' type of residence ' value= 'Parent Apartment'/>
      </div>

    </div>
  );
};

export default PersonalInformation;