import React from 'react';
import PersonalExcerpt from './PersonalExcerpt';
import styles from '../../styles/Personal.module.css';
import { UserType } from '../../../types';
interface GuarantorProps {
  user: UserType
}


const Guarantor = ({ user }:GuarantorProps) => {
  const fullName = `${user?.guarantor.firstName} ${user?.guarantor.lastName}`;
  return (
    <div>
      <div>
        <div className= {styles.bodycontainer}>
          <p className= {styles.information}> Guarantor</p>


          <div className= {styles.container}>
            <PersonalExcerpt name= ' full name ' value= {fullName}/>
            <PersonalExcerpt name= ' phone number ' value= {user?.guarantor.phoneNumber}/>
            <PersonalExcerpt name= ' email address' value= {user?.guarantor.address}/>
            <PersonalExcerpt name= ' relationship' value= 'sister'/>
          </div>

        </div>

      </div>



    </div>
  );
};

export default Guarantor;