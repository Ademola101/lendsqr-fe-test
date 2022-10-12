import React from 'react';
import PersonalExcerpt from './PersonalExcerpt';
import styles from '../../styles/Personal.module.css';
import { UserType } from '../../../types';
interface SocialsProps {
  user: UserType
}


const Socials = ({ user }:SocialsProps) => {
  return (
    <div>
      <div className= {styles.bodycontainer}>
        <p className= {styles.information}> Socials</p>


        <div className= {styles.container}>
          <PersonalExcerpt name= ' twitter ' value= {user?.socials.twitter}/>
          <PersonalExcerpt name= ' facebook ' value= {user?.socials.facebook}/>
          <PersonalExcerpt name= ' instagram' value= {user?.socials.instagram}/>
        </div>

      </div>

    </div>  );
};

export default Socials;